import React from "react";
import { Share2, Linkedin, Twitter, Facebook, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ShareButtons({ url, title, description }) {
  const shareUrl = url || window.location.href;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description || '');

    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    if (platform === 'native' && navigator.share) {
      navigator.share({ title, text: description, url: shareUrl });
    } else if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm text-gray-600 font-medium mr-2">Share:</span>
      {navigator.share && (
        <Button
          onClick={() => handleShare('native')}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      )}
      <Button
        onClick={() => handleShare('linkedin')}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Linkedin className="w-4 h-4" />
        LinkedIn
      </Button>
      <Button
        onClick={() => handleShare('twitter')}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Twitter className="w-4 h-4" />
        Twitter
      </Button>
      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="sm"
        className="flex items-center gap-2"
      >
        <Link2 className="w-4 h-4" />
        Copy Link
      </Button>
    </div>
  );
}