'use client';

import React from 'react';
import PageLayout from '../../components/layout/PageLayout';

export default function TermsOfService() {
  return (
    <PageLayout title="Mecha Break - Terms of Service" description="Read Mecha Break's Terms of Service to understand the rules, guidelines, and legal terms that govern your use of our game and services.">
      <section className="container-section bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="section-title">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="lead">
              Last updated: March 15, 2025
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using Mecha Break, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of Mecha Break per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained in Mecha Break</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>

            <h2>3. User Account</h2>
            <p>
              To access certain features of Mecha Break, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>

            <h2>4. User Conduct</h2>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>Use Mecha Break for any illegal purpose</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, and other matters related to Mecha Break are protected under applicable copyrights and other proprietary laws. The copying, redistribution, use, or publication of any such content is prohibited without our express permission.
            </p>

            <h2>6. Disclaimer</h2>
            <p>
              The materials on Mecha Break are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>7. Limitations</h2>
            <p>
              In no event shall Mecha Break or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Mecha Break.
            </p>

            <h2>8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p>
              Email: legal@mechabreak.org
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
} 