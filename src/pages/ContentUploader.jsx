import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, FileText, CheckCircle, Loader2 } from 'lucide-react';

export default function ContentUploader() {
  const [file, setFile] = useState(null);
  const [contentType, setContentType] = useState('book_chapter');
  const [source, setSource] = useState('The Non-Obvious Guide to AI for Marketing');
  const [chapterNumber, setChapterNumber] = useState('');
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }

    setUploading(true);
    setResult(null);

    try {
      // Upload file
      const { file_url } = await base44.integrations.Core.UploadFile({ file });

      // Extract and store
      const response = await base44.functions.invoke('extractAndStoreContent', {
        file_url,
        content_type: contentType,
        source,
        chapter_number: chapterNumber ? parseInt(chapterNumber) : null
      });

      setResult(response.data);
      setFile(null);
      setChapterNumber('');
    } catch (error) {
      console.error('Upload failed:', error);
      console.error('Full error:', error.response?.data || error);
      
      const errorMessage = error.response?.data?.error || error.message;
      const errorDetails = error.response?.data?.details || '';
      
      alert(`Upload failed: ${errorMessage}\n${errorDetails}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Content Library Uploader</h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload & Extract Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload File (PDF)
              </label>
              <div className="flex items-center gap-4">
                <Input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="flex-1"
                />
                {file && (
                  <div className="flex items-center gap-2 text-green-600">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm">{file.name}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Type
              </label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="book_chapter">Book Chapter</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="case_study">Case Study</SelectItem>
                  <SelectItem value="framework">Framework</SelectItem>
                  <SelectItem value="resource">Resource</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Source
              </label>
              <Input
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="e.g., The Non-Obvious Guide to AI for Marketing"
              />
            </div>

            {contentType === 'book_chapter' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Chapter Number (optional)
                </label>
                <Input
                  type="number"
                  value={chapterNumber}
                  onChange={(e) => setChapterNumber(e.target.value)}
                  placeholder="e.g., 1"
                />
              </div>
            )}

            <Button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Extracting & Storing...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Extract & Store Content
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Successfully Stored</h3>
                  <p className="text-gray-700 mb-2"><strong>Title:</strong> {result.record.title}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Key Concepts:</strong> {result.record.key_concepts.join(', ')}
                  </p>
                  <p className="text-gray-600 text-sm">
                    The Book Q&A agent can now reference this content.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-2">How It Works</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
              <li>Upload a PDF (book chapter, presentation, article)</li>
              <li>AI extracts key concepts, takeaways, and highlights</li>
              <li>Condensed content is stored in the ReferenceContent database</li>
              <li>Your Book Q&A agent can now answer questions using this content</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}