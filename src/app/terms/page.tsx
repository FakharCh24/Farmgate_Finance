'use client';

import { useEffect, useState } from 'react';

export default function TermsPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-accent/10 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex justify-center items-start">
        <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-xl border border-accent/30 p-8 md:p-12 relative">
          <h1 className="font-headline text-primary text-4xl md:text-5xl font-bold mb-6 sticky top-0 bg-white/90 z-10 pb-4 border-b border-accent/20">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none">
          <p>
            Please read these terms and conditions carefully before using the Farmgate Access service operated by Farmgate Finance Ltd.
          </p>
          <h2 className="font-bold text-[#234066]">1. Introduction</h2>
          <p>
            These Terms will be applied fully and affect to your use of this Service. By using this Service, you agreed to accept all terms and conditions written in here. You must not use this Service if you disagree with any of these Standard Terms and Conditions.
          </p>
          <h2 className="font-bold text-[#234066]">2. Intellectual Property Rights</h2>
          <p>
            Other than the content you own, under these Terms, Farmgate Finance Ltd and/or its licensors own all the intellectual property rights and materials contained in this Service.
          </p>
          <p>
            You are granted a limited license only for purposes of viewing the material contained on this Service.
          </p>
          <h2 className="font-bold text-[#234066]">3. Restrictions</h2>
          <p>You are specifically restricted from all of the following:</p>
          <ul>
            <li className="font-bold text-[#234066]">publishing any Service material in any other media;</li>
            <li className="font-bold text-[#234066]">selling, sublicensing and/or otherwise commercializing any Service material;</li>
            <li className="font-bold text-[#234066]">publicly performing and/or showing any Service material;</li>
            <li className="font-bold text-[#234066]">using this Service in any way that is or may be damaging to this Service;</li>
            <li className="font-bold text-[#234066]">using this Service in any way that impacts user access to this Service;</li>
          </ul>
          <h2 className="font-bold text-[#234066]">4. Your Content</h2>
          <p>
            In these Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Service. By displaying Your Content, you grant Farmgate Finance Ltd a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
          </p>
          <h2 className="font-bold text-[#234066]">5. No warranties</h2>
          <p>
            This Service is provided “as is,” with all faults, and Farmgate Finance Ltd express no representations or warranties, of any kind related to this Service or the materials contained on this Service. Also, nothing contained on this Service shall be interpreted as advising you.
          </p>
          <h2 className="font-bold text-[#234066]">6. Limitation of liability</h2>
          <p>
            In no event shall Farmgate Finance Ltd, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Service whether such liability is under contract. Farmgate Finance Ltd, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Service.
          </p>
          <h2 className="font-bold text-[#234066]">7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of New Zealand, and you submit to the non-exclusive jurisdiction of the state and federal courts located in New Zealand for the resolution of any disputes.
          </p>
            {currentDate && <p className="mt-8 text-sm text-muted-foreground">Last updated: {currentDate}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
