import Typography from "@/components/atoms/typography/Typography";
import FooterCtaCard from "@/components/organism/footerCtaCard/FooterCtaCard";
import MainLayout from "@/components/templates/MainLayout";
import React from "react";

function page() {
  const footerCtaData = {
    mealTransition: {
      title: "Meal",
      highlight: "Transition",
      paragraph:
        "Gradually introduce our fresh meals to ensure a smooth adjustment and lasting benefits for your furry child",
      imageSrc: "/images/meal-transition.webp",
    },
    petFood: {
      title: "Looking for",
      highlight: "Cat Food?",
      paragraph:
        "Check out our nutrient-rich and irresistibly delicious Cat Bowls for optimal feline health and wellness!",
      imageSrc: "/images/cat.webp",
    },
  };
  return (
    <MainLayout>
      <div className="my-[var(--space-40-90)]">
        <Typography
          tag="h2"
          text="Terms And "
          className="text-primary-dark text-center"
        >
          <Typography tag="span" text="Conditions" className="highlight" />
        </Typography>
      </div>
      <div className="max-w-[90.65vw] lg:max-w-[62.5vw] mx-auto">
        <div className="">
          <Typography
            tag="h3"
            text="Privacy Policy"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-10-20)] mt-[var(--space-14-24)]">
            <Typography
              tag="p"
              text='In this Privacy Policy, "Second Nature," "we," "us," or "our" refers to Second Nature Trading W.L.L., a company established and operating in the State of Qatar. Our registered office is located at Office Address, Doha, Qatar.'
            />

            <Typography
              tag="p"
              text="We are committed to protecting your personal information in accordance with the laws of the State of Qatar, including Law No. 13 of 2016 Concerning Personal Data Privacy Protection (Qatar Data Privacy Law)."
            />
            <Typography
              tag="p"
              text="You may contact us at any time by emailing us at: [insert@email.com]"
            />
            <Typography
              tag="p"
              text="By using our website and services and providing your personal information, you agree to the terms outlined in this Privacy Policy and any other applicable agreements between you and Second Nature."
            />
            <Typography
              tag="p"
              text="We may update this Privacy Policy from time to time by publishing the updated version on our website. We encourage you to review this page periodically."
            />
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] my-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="What personal information do we collect?"
            className="text-secondary-1"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We collect the following types of personal information from you:"
            />

            <div>
              <Typography
                tag="p"
                className="ml-2"
                text="1. Personal Information"
              />
              <Typography tag="p" text="">
                <ul className="list-disc flex flex-col gap-0.5 ml-12 marker:text-[10px] marker:text-gray-700">
                  <li>Your name</li>
                  <li>Your email address</li>
                </ul>
              </Typography>
            </div>

            <div>
              <Typography tag="p" className="ml-2" text="2. Pet Information" />
              <Typography tag="p" text="">
                <ul className="list-disc flex flex-col gap-0.5 ml-10 lg:ml-12 marker:text-[10px] marker:text-gray-700">
                  <li>Your pet&apos;s name</li>
                  <li>Breed</li>
                  <li>Age</li>
                  <li>Weight</li>
                  <li>Activity level</li>
                  <li>Allergies or intolerances</li>
                  <li>Eating preferences</li>
                </ul>
              </Typography>
            </div>

            <div>
              <Typography
                tag="p"
                className="ml-2"
                text="3. Billing & Shipping Information"
              />
              <Typography tag="p" text="">
                <ul className="list-disc flex flex-col gap-0.5 ml-10 lg:ml-12 marker:text-[10px] marker:text-gray-700">
                  <li>Mailing address</li>
                  <li>Phone number</li>
                  <li>Credit card or payment details</li>
                </ul>
              </Typography>
            </div>

            <div>
              <Typography
                tag="p"
                className="ml-2"
                text="4. Other Information"
              />
              <Typography tag="p" text="">
                <ul className="list-disc flex flex-col gap-0.5 ml-10 lg:ml-12 marker:text-[10px] marker:text-gray-700">
                  <li>
                    IP address, device ID, browser type, and usage analytics
                  </li>
                  <li>
                    Your interactions with our site, including pages viewed,
                    preferences, and traffic data
                  </li>
                  <li>
                    Information you provide through surveys, feedback forms,
                    contests, or events
                  </li>
                  <li>Marketing and communication preferences</li>
                  <li>
                    Any other personal information that may be required in order
                    to facilitate your dealings with us
                  </li>
                </ul>
              </Typography>
            </div>
            <div>
              <Typography
                tag="p"
                className="ml-2"
                text="5. Employment Applications"
              />
              <Typography tag="p" text="">
                <ul className="list-disc flex flex-col gap-0.5 ml-10 lg:ml-12 marker:text-[10px] marker:text-gray-700">
                  <li>
                    When applying for a role with us, we may collect your CV,
                    contact details, work history, and background check details
                    from recruiters or prior employers. This policy does not
                    cover information processed in the context of employment
                    records of current or former employees.
                  </li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Sensitive Information"
            className="text-secondary-1"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We may collect sensitive personal data, such as health-related or biometric information, only where necessary and with your explicit consent or as permitted by Qatari law."
            />
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="How We Collect Information"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We collect personal information directly from you or via:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>Our website or subscription forms</li>
              <li>
                Your communication with us by email, phone, or social media
              </li>
              <li>Surveys, promotions, or events</li>
              <li>
                Analytics tools, such as cookies or website tracking
                technologies
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Why We Collect, Use, and Share Your Data"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We collect, hold, and use your personal information for purposes including:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>Fulfilling orders and personalizing your pet&apos;s meal plan</li>
              <li>
                Providing, maintaining, and improving our website and services
              </li>
              <li>
                Sending updates, service alerts, and customer support responses
              </li>
              <li>Marketing and promotional messages (with your consent)</li>
              <li>Managing competitions, offers, or loyalty programs</li>
              <li>Complying with Qatari laws and regulations</li>
              <li>Evaluating job applications</li>
            </ul>
            <Typography
              tag="p"
              text="We may share your data with third parties (e.g. IT providers, delivery partners, cloud services) only where necessary and under confidentiality agreements."
            />
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Marketing and Communication"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We may send you promotional emails, SMS, or updates about products and services. You may opt out at any time by:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>Clicking the unsubscribe link in emails</li>
              <li>Replying &quot;STOP&quot; to marketing SMS</li>
              <li>Contacting us directly</li>
            </ul>
            <Typography
              tag="p"
              text="We may share your data with third parties (e.g. IT providers, delivery partners, cloud services) only where necessary and under confidentiality agreements."
            />
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Disclosure to Third Parties"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography tag="p" text="We may share your personal data with:" />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>Our employees and contractors</li>
              <li>Payment processors and logistics providers</li>
              <li>Marketing and analytics partners</li>
              <li>Legal or regulatory bodies when required</li>
              <li>
                Any entity involved in a potential business merger or
                acquisition
              </li>
              <li>Any third party with your explicit consent</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="International Transfers"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="If your data is transferred outside of Qatar (e.g. for storage or processing on global cloud platforms), we will ensure that adequate data protection measures are in place, consistent with Qatari privacy laws."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Cookies and Analytics"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We use cookies and similar technologies to:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>Enhance user experience</li>
              <li>Remember preferences</li>
              <li>Analyze website usage</li>
              <li>
                Serve tailored ads through platforms like Google Analytics and
                Meta Pixel
              </li>
            </ul>
            <Typography
              tag="p"
              text="You may disable cookies via your browser, though some site features may not work as intended."
            />
            <Typography
              tag="p"
              text="For opting out of Google Analytics tracking, you can install their browser add-on. Meta's privacy tools can be accessed through your Facebook/Instagram account settings."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Use of Artificial Intelligence (AI)"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We may use AI or machine learning tools to personalize your experience, improve services, and support customer service. When using AI tools, we will:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>
                Ensure transparency and human oversight for significant
                decisions
              </li>
              <li>Maintain data security and restrict misuse</li>
              <li>Evaluate risks and monitor AI performance</li>
            </ul>
            <Typography
              tag="p"
              text="We treat AI-generated inferences as personal information where relevant and protect them accordingly."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="How We Secure Your Data"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We implement physical, technical, and organizational measures to safeguard your information, including encryption, secure storage, staff training, and internal access controls. However, no online platform can guarantee absolute security."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="Access, Correction & Complaints"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography tag="p" text="You may:" />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>Request access to your personal data</li>
              <li>Request corrections if your data is inaccurate</li>
              <li>Withdraw your consent at any time</li>
              <li>
                Submit a complaint if you believe we have mishandled your data
              </li>
            </ul>
            <Typography
              tag="p"
              text="To do so, contact us at: [insert@email.com]"
            />
            <Typography
              tag="p"
              text="We will acknowledge your request and respond within a reasonable period."
            />
          </div>
        </div>

        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-60)]">
          <Typography
            tag="h5"
            text="External Links"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="Our website may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies before sharing your data."
            />
          </div>
        </div>
      </div>

      <div className="pb-[var(--space-120-180)]">
        <FooterCtaCard
          mealTransition={footerCtaData.mealTransition}
          petFood={footerCtaData.petFood}
        />
      </div>
    </MainLayout>
  );
}

export default page;
