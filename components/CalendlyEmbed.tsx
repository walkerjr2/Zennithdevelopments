'use client';

import { useEffect, useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  utm?: {
    utmCampaign?: string;
    utmSource?: string;
    utmMedium?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

export function CalendlyEmbed({ 
  url = "https://calendly.com/zennithdevelopments",
  prefill,
  utm 
}: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsLoading(false);
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Build query params
  const params = new URLSearchParams();
  
  // Hide GDPR banner
  params.append('hide_gdpr_banner', '1');
  
  // Custom branding colors
  params.append('background_color', 'ffffff');
  params.append('text_color', '1e293b');
  params.append('primary_color', '3b82f6');
  
  // Prefill data
  if (prefill?.name) params.append('name', prefill.name);
  if (prefill?.email) params.append('email', prefill.email);
  
  // UTM params
  if (utm?.utmCampaign) params.append('utm_campaign', utm.utmCampaign);
  if (utm?.utmSource) params.append('utm_source', utm.utmSource);
  if (utm?.utmMedium) params.append('utm_medium', utm.utmMedium);
  if (utm?.utmContent) params.append('utm_content', utm.utmContent);
  if (utm?.utmTerm) params.append('utm_term', utm.utmTerm);

  const calendlyUrl = `${url}?${params.toString()}`;

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-900">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-zd-royal-blue dark:border-zd-electric-cyan mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading calendar...</p>
          </div>
        </div>
      )}
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
