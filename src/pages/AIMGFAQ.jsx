import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MetaTags from "@/components/SEO/MetaTags";
import { Calendar, Users, Video, Clock, MessageCircle, Lightbulb } from "lucide-react";

export default function AIMGFAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <MetaTags
        title="AI Marketers Guild (AIMG) AI Insiders Speaker FAQ"
        description="Everything speakers need to know about presenting at AI Insiders weekly sessions - format, audience, preparation, and more."
        url="https://highcaliberai.com/aimgfaq"
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-600 text-white">AI Insiders Speaker Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Marketers Guild (AIMG)<br />AI Insiders Speaker FAQ
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about presenting at AI Insiders
          </p>
        </div>

        {/* General Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">General Information</h2>
          
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What is AI Insiders?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI Insiders is a weekly <strong>1-hour virtual session</strong> by{" "}
                    <a href="http://www.aimarketersguild.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                      AI Marketers Guild
                    </a>
                    , featuring top marketing professionals, AI innovators, and industry leaders discussing AI's role in marketing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">When and where does it take place?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI Insiders happens <strong>every Wednesday at 12-1 PM ET</strong> on Zoom. Event details and registration are available at{" "}
                    <a href="https://lu.ma/aimg" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline font-semibold">
                      lu.ma/aimg
                    </a>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Who can attend?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sessions are open to AI Marketers Guild members and invited guests, including brand/agency marketers, tech/startup executives, consultants, and other AI-focused professionals. It's a public event, so we keep an eye out for spammers and the like, but anyone can join even if they're not in AIMG yet.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* For Speakers */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">For Speakers</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">How long should my talk be?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Your presentation can be anywhere from <strong>5 to 30 minutes</strong>, depending on your topic and preferred format.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the usual format?</h3>
                <p className="text-gray-700 mb-4">Each session follows this structure:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><strong>Introduction & Settling In</strong> (First 5 min)</li>
                  <li><strong>Speaker Presentation or Fireside Chat</strong> (5-30 min)</li>
                  <li><strong>Fireside Chat with Host</strong> (Optional, Time Permitting — may skip to audience Q&A)</li>
                  <li><strong>Audience Q&A & Discussion</strong></li>
                </ol>
                <p className="text-gray-700 mt-4">
                  Sessions are interactive, and the format is flexible—fireside chats, live demos, and audience-driven discussions are all welcome.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What kind of audience should I expect?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Live attendees:</strong> 20-50 participants</li>
                  <li><strong>YouTube views:</strong> Many more post-event</li>
                  <li><strong>Audience mix:</strong> Brand/agency marketers, startup founders, consultants, and AI-focused professionals</li>
                  <li><strong>Engagement level:</strong> Highly interactive—expect live questions and participation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What should I prepare?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>A <strong>short presentation or key talking points</strong> (slides are optional)</li>
                  <li>A <strong>one-liner description</strong> of your talk for promotions — we'll need this ASAP</li>
                  <li>Any <strong>materials or links</strong> to share with attendees (optional)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I use slides or demos?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! Slides are welcome but not required, and you can <strong>demo any relevant tool or product live</strong>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I invite additional speakers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, you can bring a <strong>colleague, client, or partner</strong> to join your talk—just let David know in advance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I join AIMG?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Of course! Join at{" "}
                  <a href="http://aimarketersguild.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                    aimarketersguild.com
                  </a>
                  {" "}or ask David for a 'skip the line' invite to get you right in the Slack and on the email list. It's often helpful if you're in the Slack so you can engage with members before and after the event.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What's the vibe—formal or casual?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Whatever feels natural to you! Some speakers prefer a structured approach, while others keep it conversational.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I engage the audience?</h3>
                    <p className="text-gray-700 mb-3">Absolutely! You can:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Ask the audience questions</li>
                      <li>Use <strong>Zoom polls</strong> (David can set them up for you)</li>
                      <li>Encourage discussion throughout your talk</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a tech setup or pre-call?</h3>
                <p className="text-gray-700 leading-relaxed">
                  No pre-call is required—<strong>just show up on Zoom and share your screen if needed</strong>. Contact David directly for any issues. If it'd be helpful to jump on before, you can find time with David.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Zoom link is old. Am I on the right one?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yup! We've reused the same invite link to make it easy to join, but that means when you first sign in, it might look like a very old meeting invite. It's a little weird as far as the flow goes but the easiest way to get it to work consistently.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Post-Event & Promotion */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Post-Event & Promotion</h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How is the session promoted?</h3>
                <p className="text-gray-700 mb-3">AI Insiders is promoted through:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Newsletters & LinkedIn</strong></li>
                  <li><strong>Slack community announcements</strong></li>
                  <li><strong>Luma event listing (4,000+ subscribers)</strong></li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Speakers are also encouraged to promote their session, and AIMG will amplify their efforts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Video className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Are sessions recorded?</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Yes! All sessions are recorded and posted on YouTube:{" "}
                      <a href="https://www.youtube.com/@aimarketersguild" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                        youtube.com/@aimarketersguild
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I get a copy of the recording?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! You'll receive the YouTube link and can request <strong>Zoom's original files</strong> if needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I share materials with attendees?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes! You can share <strong>contact info, LinkedIn, slides, or additional resources</strong>. David will send these to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                  <li>Live attendees</li>
                  <li>RSVPs who didn't attend</li>
                  <li>The broader AIMG community (Slack/newsletter)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-12 text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Thanks! We look forward to your session!
          </h3>
          <p className="text-gray-700 mb-6">
            -David & the AIMG team
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://lu.ma/aimg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Upcoming Sessions
            </a>
            <a
              href="https://www.aimarketersguild.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Join AIMG
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}