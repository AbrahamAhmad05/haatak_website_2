'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'react-share';

import { Button } from '@/components/ui/button';
import { Copy, ExternalLink, Share2 } from 'lucide-react';
import { useState } from 'react';

const ShareModal = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="share-button">
        <ExternalLink className='' color='#ffffff'  />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this blog</DialogTitle>
        </DialogHeader>

        <div className="flex flex-wrap items-center gap-4 py-2">
          <FacebookShareButton url={url} quote={title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <LinkedinShareButton url={url} title={title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>

          <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <Button
            onClick={handleCopy}
            variant="ghost"
            className="flex items-center gap-1"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy link'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
