import FooterSection from '@/components/sections/footer-section';

export default function PrivacyPolicy() {
  return (
    <>
      <div className='flex flex-col text-left w-full max-w-4xl mx-auto gap-8 px-4 sm:px-6 lg:px-8 py-20 lg:py-24'>
        <div>
          <h2 className='font-bold text-4xl md:text-6xl leading-tight tracking-tight'>
            Privacy Policy
          </h2>

          <p className='text-md text-gray-500 mt-1 mb-6'>
            Last Updated: September 29, 2025
          </p>

          <div className='text-gray-600 leading-relaxed text-lg max-w-4xl'>
            <div className='prose prose-gray max-w-none'>
              <p className='mb-3'>
                Please read this privacy policy carefully to understand our
                practices regarding your personal information and how we will
                treat it.
              </p>
              <p className='mb-3'>
                By submitting your details through the Website and/or using any
                of the services that we may provide to you, you are agreeing to
                this policy and must read the entirety of it.
              </p>
              <p>
                By doing so you are accepting and consenting to the practices
                described in this privacy policy. You must not submit your
                details to us or use our services unless you agree with all of
                the terms of this privacy policy.
              </p>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  1. About Us
                </h2>
                <p className='mb-3'>
                  1.1 For the purposes of Regulation (EU) 2016/679 (the General
                  Data Protection Regulation or GDPR) and Act No. 18/2018 Coll.
                  on the Protection of Personal Data (the Slovak Data Protection
                  Act), the data controller is Codabu.
                </p>

                <p>1.2 Our contact details for data protection matters are:</p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    <strong>Email:</strong> support@codabu.com
                  </li>
                  <li>
                    <strong>Website:</strong> https://www.codabu.com/
                  </li>
                </ul>

                <p className='mb-3'>
                  1.3 We will only process personal information in accordance
                  with the GDPR, Slovak Data Protection Act, and any other
                  applicable privacy laws.
                </p>
                <p>
                  1.4 If you have any questions in relation to this privacy
                  policy or how we collect, use or store your personal
                  information, you can contact us by emailing support@codabu.com
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  2. Which Personal Information Will We Collect?
                </h2>

                <p className='mb-3'>
                  We may collect and process any of the following information
                  about you:
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  2.1 Information You Give Us
                </h3>

                <p className='mb-3'>
                  You may give us information about yourself by using the online
                  forms provided on the Website, connecting your GitHub account,
                  or by corresponding with us by email or otherwise. This
                  includes, without limitation, information you provide when
                  you:
                </p>

                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>Sign up and register to use the Website</li>
                  <li>Connect your GitHub repository</li>
                  <li>Post issues or bounties</li>
                  <li>Submit solutions or pull requests</li>
                  <li>Request early access</li>
                  <li>
                    Participate in discussion forums or other social media
                    functions on the Website
                  </li>
                  <li>Report a problem with the Website or our services</li>
                </ul>

                <p className='mb-2'>The information you give us may include:</p>

                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Your GitHub username and profile information</li>
                  <li>
                    Your payment information (bank account details, credit or
                    debit card information, payment processor account details)
                  </li>
                  <li>Your IP address</li>
                  <li>
                    Information about your GitHub repositories, issues, and pull
                    requests
                  </li>
                  <li>Communications between users on the platform</li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  2.2 Information We Collect About You
                </h3>

                <p className='mb-2'>
                  Each time you visit the Website we may automatically collect
                  any of the following information:
                </p>

                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    Technical information, including the Internet protocol (IP)
                    address used to connect your computer to the internet, your
                    login information, browser type and version, browser plug-in
                    types and versions, operating system and platform, time zone
                    setting, and device information
                  </li>
                  <li>
                    Information about your visit, including the full Uniform
                    Resource Locators (URL) clickstream to, through and from our
                    site (including date and time), length of visits to certain
                    pages, page interaction information (such as scrolling,
                    clicks, and mouse-overs), and methods used to browse away
                    from the page
                  </li>
                  <li>
                    GitHub API data, including repository information, issue
                    details, commit history, and pull request data necessary to
                    provide our services
                  </li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  2.3 Information We Receive From Other Sources
                </h3>
                <p className='mb-2'>
                  We may receive information about you from:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    GitHub, including your public profile information,
                    repository data, and activity when you connect your GitHub
                    account to our services
                  </li>
                  <li>Payment processors and financial service providers</li>
                  <li>
                    Technical service providers, analytics providers, and
                    security service providers
                  </li>
                  <li>
                    Other third-party services you choose to integrate with
                    Codabu
                  </li>
                </ul>

                <p>
                  We work closely with third parties and may receive information
                  about you from them. We will have informed you when we
                  collected that data that it may be shared internally and
                  combined with data collected on the Website.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  3. How Will Your Personal Information Be Stored and Used?
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  3.1 Legal Basis for Processing
                </h3>
                <p className='mb-2'>
                  We process your personal information based on the following
                  legal grounds under GDPR:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    <strong>Performance of a contract:</strong> To provide the
                    services you requested when you signed up for Codabu
                  </li>
                  <li>
                    <strong>Legitimate interests:</strong> To improve our
                    services, prevent fraud, and maintain platform security
                  </li>
                  <li>
                    <strong>Legal obligation:</strong> To comply with applicable
                    laws and regulations
                  </li>
                  <li>
                    <strong>Consent:</strong> For marketing communications and
                    certain data sharing (where required)
                  </li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  3.2 Purposes of Processing
                </h3>
                <p className='mb-2'>
                  We, or third party data processors acting on our behalf, may
                  collect, use and store the personal information listed above
                  for the following reasons:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    To allow you to access and use the Website and to register
                    for an online account
                  </li>
                  <li>
                    To connect and synchronize your GitHub repositories and
                    issues
                  </li>
                  <li>
                    To facilitate the posting of bounties and submission of
                    solutions
                  </li>
                  <li>To process payments and manage financial transactions</li>
                  <li>To match developers with issues and bounties</li>
                  <li>
                    To verify your identity in order to prevent and detect fraud
                    and money laundering
                  </li>
                  <li>
                    To provide you with content which is tailored specifically
                    to you
                  </li>
                  <li>
                    To provide you with the information and services that you
                    request from us
                  </li>
                  <li>To carry out statistical analysis and market research</li>
                  <li>
                    For security, system maintenance, and troubleshooting
                    purposes
                  </li>
                  <li>
                    To notify you about changes to our services and to keep you
                    informed about our fees and charges
                  </li>
                  <li>
                    With your consent only, to contact you (including by email)
                    with information about our products and services which
                    either you request, or which we feel will be of interest to
                    you
                  </li>
                  <li>To comply with legal and regulatory obligations</li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  3.3 Data Retention
                </h3>
                <p className='mb-3'>
                  We will retain your personal information only for as long as
                  necessary to fulfill the purposes for which it was collected,
                  including for the purposes of satisfying any legal,
                  accounting, or reporting requirements. When we no longer need
                  your personal information, we will securely delete or
                  anonymize it.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  3.4 Anonymized Data
                </h3>
                <p>
                  We may also collect details about you as a user of the Website
                  for the purposes of preparing reports or compiling statistics.
                  Such details will be anonymized and you will not be
                  identifiable from the data collected.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  4. Disclosure of Your Personal Information
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  4.1 Internal Sharing
                </h3>
                <p className='mb-3'>
                  We may share your personal information with any company that
                  is a member of our group, which means our subsidiaries and
                  affiliates.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  4.2 Third Party Service Providers
                </h3>
                <p className='mb-2'>
                  We will share your personal information with selected third
                  parties, including:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>GitHub, as our platform integration partner</li>
                  <li>
                    Payment processors (such as Stripe, PayPal, or similar
                    services) for handling financial transactions
                  </li>
                  <li>
                    Cloud hosting providers for data storage and platform
                    infrastructure
                  </li>
                  <li>
                    Email service providers for sending notifications and
                    communications
                  </li>
                  <li>
                    Analytics and search engine providers that assist us in the
                    improvement and optimization of our site
                  </li>
                  <li>Customer support and communication tools</li>
                  <li>Security and fraud prevention services</li>
                  <li>Identity verification service providers</li>
                </ul>
                <p className='mb-3'>
                  Any third parties with whom we share your personal information
                  are limited (by law and by contract) in their ability to use
                  your personal information for any purpose other than to
                  provide services for us. We will always ensure that any third
                  parties with whom we share your personal information are
                  subject to privacy and security obligations consistent with
                  this privacy policy and applicable laws.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  4.3 Legal and Business Transfers
                </h3>
                <p className='mb-2'>
                  We may also disclose your personal information to third
                  parties:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    In the event that we sell or buy any business or assets, in
                    which case we may disclose your personal data to the
                    prospective seller or buyer of such business or assets
                  </li>
                  <li>
                    If Codabu or substantially all of its assets are acquired by
                    a third party, in which case personal information held by
                    Codabu will be one of the transferred assets
                  </li>
                  <li>
                    If we are under a duty to disclose or share your personal
                    data in order to comply with any legal obligation, court
                    order, or governmental request
                  </li>
                  <li>
                    To enforce or apply our terms and conditions or any other
                    agreement
                  </li>
                  <li>
                    To protect the rights, property, or safety of Codabu, our
                    customers, or other persons. This may include exchanging
                    information with other organizations for the purposes of
                    fraud protection and credit risk reduction
                  </li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  4.4 Your Consent
                </h3>
                <p className='mb-3'>
                  Save as expressly detailed above, we will never share, sell or
                  rent any of your personal information to any third party
                  without your consent. Where you have given your consent for us
                  to share your information, but later change your mind, you
                  should contact us by email at support@codabu.com.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  4.5 Public Information
                </h3>
                <p className='mb-2'>
                  Please note that certain information you provide may be
                  publicly visible, including:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    Your GitHub username and profile information (as public on
                    GitHub)
                  </li>
                  <li>
                    Issues and bounties you post (if in public repositories)
                  </li>
                  <li>Pull requests and code submissions</li>
                  <li>Public comments and communications on the platform</li>
                </ul>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  5. Your Rights Under GDPR
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  5.1 Your Data Protection Rights
                </h3>
                <p className='mb-2'>
                  Under the GDPR, you have the following rights:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    <strong>Right of access:</strong> You have the right to
                    request copies of your personal information
                  </li>
                  <li>
                    <strong>Right to rectification:</strong> You have the right
                    to request that we correct any information you believe is
                    inaccurate or complete information you believe is incomplete
                  </li>
                  <li>
                    <strong>Right to erasure:</strong> You have the right to
                    request that we erase your personal data, under certain
                    conditions
                  </li>
                  <li>
                    <strong>Right to restrict processing:</strong> You have the
                    right to request that we restrict the processing of your
                    personal data, under certain conditions
                  </li>
                  <li>
                    <strong>Right to object to processing:</strong> You have the
                    right to object to our processing of your personal data,
                    under certain conditions
                  </li>
                  <li>
                    <strong>Right to data portability:</strong> You have the
                    right to request that we transfer the data that we have
                    collected to another organization, or directly to you, under
                    certain conditions
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> Where we rely on
                    consent to process your personal data, you have the right to
                    withdraw that consent at any time
                  </li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  5.2 Exercising Your Rights
                </h3>
                <p className='mb-3'>
                  To exercise any of these rights, please contact us by email at
                  support@codabu.com. We will respond to your request within one
                  month. If you are not satisfied with our response, you have
                  the right to lodge a complaint with the Slovak Data Protection
                  Authority (Úrad na ochranu osobných údajov Slovenskej
                  republiky) at https://dataprotection.gov.sk/
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  5.3 Marketing Communications
                </h3>
                <p className='mb-3'>
                  You have the right to ask us to not process your personal
                  information for marketing purposes. We will inform you (before
                  collecting your personal information) if we intend to use your
                  personal information for such purposes.
                </p>
                <p className='mb-3'>
                  You can exercise your right to prevent such processing by
                  checking certain boxes on the forms we use to collect your
                  personal information. Alternatively, you can contact us by
                  email at any time.
                </p>
                <p>
                  If you have previously given your consent to the use of your
                  personal information for marketing purposes, you can choose to
                  stop receiving marketing communications which we send to you
                  from time to time by following the unsubscribe instructions
                  included in such communications. Alternatively, you can opt
                  out of such communications at any time by contacting us by
                  email.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  6. International Transfers of Personal Information
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  6.1 Data Transfers
                </h3>
                <p className='mb-3'>
                  The personal information that we collect from you may be
                  transferred to, and stored at, a destination outside of the
                  European Economic Area (EEA), including but not limited to
                  servers and services located in the United States and other
                  countries where our service providers operate.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  6.2 Transfer Safeguards
                </h3>
                <p className='mb-2'>
                  When we transfer your personal information outside the EEA, we
                  will ensure that:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    The transfer is to a country deemed by the European
                    Commission to provide an adequate level of protection for
                    personal data, or
                  </li>
                  <li>
                    We have put in place appropriate safeguards, such as
                    Standard Contractual Clauses approved by the European
                    Commission, or
                  </li>
                  <li>
                    We rely on other appropriate legal mechanisms approved under
                    GDPR
                  </li>
                </ul>
                <p>
                  We will always take all reasonable precautions to ensure that
                  your personal information is treated securely and in
                  accordance with this privacy policy.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  7. Security of Data
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  7.1 Security Measures
                </h3>
                <p className='mb-2'>
                  All information you provide to us is stored on secure servers.
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized or
                  unlawful processing, accidental loss, destruction, or damage,
                  including:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    Encryption of data in transit using SSL/TLS technology
                  </li>
                  <li>Encryption of sensitive data at rest</li>
                  <li>
                    Regular security assessments and vulnerability testing
                  </li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  7.2 Payment Security
                </h3>
                <p className='mb-3'>
                  Payment transactions are undertaken by third party payment
                  service providers (such as Stripe or PayPal) and are encrypted
                  using industry standard security protocols. We do not store
                  complete payment card information on our servers.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  7.3 Password Security
                </h3>
                <p className='mb-3'>
                  Where we have given you (or where you have chosen) a password
                  which enables you to access your online account, you are
                  responsible for keeping this password confidential. We ask you
                  not to share a password with anyone.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  7.4 Limitation of Liability
                </h3>
                <p>
                  We follow generally accepted industry standards to protect the
                  personal information submitted to us, both during transmission
                  and once we receive it. Although we make every effort to
                  protect the personal information which you provide to us, the
                  transmission of data over the internet is not completely
                  secure. As such, you acknowledge and accept that we cannot
                  guarantee the security of your information transmitted to the
                  Website and that any such transmission is at your own risk.
                  Once we have received your information, we will use strict
                  procedures and security features to prevent unauthorized
                  access.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  8. Third Party Websites and Services
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  8.1 External Links
                </h3>
                <p className='mb-3'>
                  The Website may, from time to time, contain links to websites
                  operated by third parties, including GitHub and other
                  integrated services. Please note that this privacy policy only
                  applies to the personal information that we collect through
                  this Website and we cannot be responsible for personal
                  information collected and stored by third parties.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  8.2 Third Party Terms
                </h3>
                <p className='mb-3'>
                  Third party websites and services have their own terms and
                  conditions and privacy policies, and you should read these
                  carefully before you submit any personal information to these
                  websites. We do not accept any responsibility or liability for
                  third party terms and conditions or policies.
                </p>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  8.3 GitHub Integration
                </h3>
                <p>
                  When you connect your GitHub account to Codabu, you authorize
                  us to access certain information from your GitHub account in
                  accordance with GitHub&apos;s terms of service and privacy
                  policy. We only access the minimum information necessary to
                  provide our services.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  9. Cookies and Tracking Technologies
                </h2>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  9.1 Use of Cookies
                </h3>
                <p className='mb-2'>
                  Our Website uses cookies, which are small files placed on your
                  internet browser when you visit our Website. We use cookies in
                  order to:
                </p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>Enable essential website functionality</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Improve user experience</li>
                  <li>Provide security features</li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  9.2 Types of Cookies
                </h3>
                <p className='mb-2'>We use the following types of cookies:</p>
                <ul className='list-disc list-inside ml-4 mb-3'>
                  <li>
                    <strong>Strictly necessary cookies:</strong> Required for
                    the website to function properly
                  </li>
                  <li>
                    <strong>Performance cookies:</strong> Help us understand how
                    visitors interact with our website
                  </li>
                  <li>
                    <strong>Functionality cookies:</strong> Remember your
                    preferences and personalize your experience
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Collect information
                    about website usage (we may use services like Google
                    Analytics)
                  </li>
                </ul>

                <h3 className='text-xl font-semibold text-black mb-3'>
                  9.3 Managing Cookies
                </h3>
                <p className='mb-3'>
                  You can control and manage cookies through your browser
                  settings. Please note that removing or blocking cookies may
                  impact your user experience and some features of the website
                  may not function properly.
                </p>
                <p>
                  For detailed information on the cookies we use and the
                  purposes for which we use them, please refer to our Cookies
                  Policy (if available separately). By continuing to use the
                  Website and/or our services, you are agreeing to our use of
                  cookies as described in this policy.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  10. Children&apos;s Privacy
                </h2>
                <p>
                  Our services are not directed to individuals under the age of
                  18. We do not knowingly collect personal information from
                  children under 18. If you become aware that a child has
                  provided us with personal information, please contact us. If
                  we become aware that we have collected personal information
                  from a child under 18 without verification of parental
                  consent, we will take steps to remove that information from
                  our servers.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  11. Changes to Our Privacy Policy
                </h2>
                <p className='mb-3'>
                  We may update our privacy policy from time to time to reflect
                  changes in our practices, technology, legal requirements, or
                  other factors. Any changes we make to our privacy policy in
                  the future will be posted on this page and, where appropriate,
                  notified to you by email.
                </p>
                <p>
                  The date at the top of this privacy policy indicates when it
                  was last updated. By continuing to use the services and our
                  Website after changes are posted, you agree to the updated
                  privacy policy. We encourage you to review this privacy policy
                  periodically to stay informed about how we are protecting your
                  information.
                </p>
              </section>

              <section className='mt-8'>
                <h2 className='text-2xl font-semibold text-black mb-3'>
                  12. Contact Us
                </h2>
                <p className='mb-3'>
                  If you have any questions, concerns, or requests regarding
                  this privacy policy or our data practices, please contact us
                  at:
                </p>
                <div className='bg-gray-200/40 p-6 rounded-md mb-3'>
                  <p>
                    <strong>Email:</strong> support@codabu.com
                  </p>
                  <p>
                    <strong>Website:</strong> https://www.codabu.com/
                  </p>
                </div>

                <p className='mb-2'>
                  For data protection matters specific to Slovak law, you may
                  also contact the Slovak Data Protection Authority:
                </p>

                <div className='bg-gray-200/40 p-6 rounded-md'>
                  <p className='font-semibold mb-1'>
                    Úrad na ochranu osobných údajov Slovenskej republiky
                  </p>
                  <p>Website: https://dataprotection.gov.sk/</p>
                  <p>Email: statny.dozor@pdp.gov.sk</p>
                </div>
              </section>

              <div className='border-t border-gray-200 pt-6 mt-8'>
                <p className='text-gray-600 italic'>
                  <strong>Acknowledgment:</strong> By using our Website and
                  services, you acknowledge that you have read and understood
                  this privacy policy and agree to its terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </>
  );
}
