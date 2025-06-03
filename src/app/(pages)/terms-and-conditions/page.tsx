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
            text="Lyka Pet Food Privacy Policy"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col gap-[var(--space-10-20)] mt-[var(--space-14-24)]">
            <Typography
              tag="p"
              text="In this Privacy Policy, ‘us’ ‘we’ or ‘our’ means Lyka Pet Food Pty Ltd and our registered office is at 290-294 Botany Road, Alexandria NSW 2015"
            />
            <Typography
              tag="p"
              text="We are committed to respecting your privacy. Our Privacy Policy sets out how we collect, use, store and disclose your personal information."
            />
            <Typography
              tag="p"
              text="You may contact us at any time by writing to us at info@lyka.com.au"
            />
            <Typography
              tag="p"
              text="By providing personal information to us, you consent to our collection, use and disclosure of your personal information in accordance with this Privacy Policy and any other arrangements that apply between us."
            />
            <Typography
              tag="p"
              text="We may change our Privacy Policy from time to time by publishing changes to it on our website. We encourage you to check our website periodically to ensure that you are aware of our current Privacy Policy."
            />
            <Typography
              tag="p"
              text="Personal information includes information or an opinion about an individual that is reasonably identifiable. For example, this may include your name, age, gender, postcode and contact details. It may also include financial information, including your credit card information."
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
                  <li>Your pets name(s)</li>
                  <li>Your pets breed(s)</li>
                  <li>Your pets age(s)</li>
                  <li>Your pets weight(s)</li>
                  <li>Your pets activity level(s)</li>
                  <li>Your pets allergies and/or intolerances</li>
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
                  <li>Mailing or street address</li>
                  <li>Telephone number</li>
                  <li>Credit card information</li>
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
                    Your device ID, device type, geo-location information,
                    computer and connection information, statistics on page
                    views, traffic to and from the sites, ad data, IP address
                    and standard web log information
                  </li>
                  <li>
                    Details of the products and services we have provided to you
                    or that you have enquired about, including any additional
                    information necessary to deliver those products and services
                    and respond to your enquiries
                  </li>
                  <li>
                    Any additional information relating to you that you provide
                    to us directly through our or indirectly through your use of
                    our website or online presence or through other websites or
                    accounts from which you permit us to collect information
                  </li>
                  <li>
                    Information you provide to us through customer surveys
                  </li>
                  <li>
                    Any other personal information that may be required in order
                    to facilitate your dealings with us
                  </li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-100)]">
          <Typography
            tag="h5"
            text="What personal information do we collect?"
            className="text-secondary-1"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We may collect, hold, use and disclose your personal information for the following purposes:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>To enable you to access and use our website and services;</li>
              <li>
                To operate, protect, improve and optimise our website and
                services, business and our user experience, such as to perform
                analytics, conduct research for advertising and marketing
                purposes;
              </li>
              <li>
                To send you service, support and administrative messages,
                reminders, technical notices, updates, security alerts, and
                information requested by you;
              </li>
              <li>
                To send you marketing and promotional messages and other
                information that may be of interest to you, including
                information sent by, or on behalf of, our business partners that
                we think you may find interesting;
              </li>
              <li>
                To administer rewards, surveys, contests, or other promotional
                activities or events sponsored or managed by us or our business
                partners;
              </li>
              <li>
                To comply with our legal obligations, resolve any disputes that
                we may have with any of our users, and enforce our agreements
                with third parties; and
              </li>
              <li>To consider your employment application</li>
            </ul>
            <Typography
              tag="p"
              text="We may also disclose your personal information to a trusted third party who also holds other information about you. This third party may combine that information in order to enable it and us to develop anonymised consumer insights so that we can better understand your preferences and interests, personalise your experience and enhance the products and services that you receive."
            />
            <Typography
              tag="p"
              text="Do we use your personal information for marketing?"
            />
            <Typography
              tag="p"
              text="We and/or our carefully selected business partners may send you direct marketing communications and information about our products and services. This may take the form of emails, SMS, mail or other forms of communication, in accordance with the Spam Act and the Privacy Act."
            />
            <Typography tag="p" text="You may opt-out of r" />
          </div>
        </div>
        <div className="flex flex-col gap-[var(--space-15-30)] mb-[var(--space-40-100)]">
          <Typography
            tag="h3"
            text="Lyka Pet Food Terms"
            className="text-secondary-1 !font-bold"
          />
          <div className="flex flex-col">
            <Typography
              tag="p"
              text="We may collect, hold, use and disclose your personal information for the following purposes:"
            />
            <ul className="list-disc flex flex-col gap-0.5 ml-6 marker:text-[10px] marker:text-gray-700">
              <li>To enable you to access and use our website and services;</li>
              <li>
                To operate, protect, improve and optimise our website and
                services, business and our user experience, such as to perform
                analytics, conduct research for advertising and marketing
                purposes;
              </li>
              <li>
                To send you service, support and administrative messages,
                reminders, technical notices, updates, security alerts, and
                information requested by you;
              </li>
              <li>
                To send you marketing and promotional messages and other
                information that may be of interest to you, including
                information sent by, or on behalf of, our business partners that
                we think you may find interesting;
              </li>
              <li>
                To administer rewards, surveys, contests, or other promotional
                activities or events sponsored or managed by us or our business
                partners;
              </li>
              <li>
                To comply with our legal obligations, resolve any disputes that
                we may have with any of our users, and enforce our agreements
                with third parties; and
              </li>
              <li>To consider your employment application</li>
            </ul>
            <Typography
              tag="p"
              text="We may also disclose your personal information to a trusted third party who also holds other information about you. This third party may combine that information in order to enable it and us to develop anonymised consumer insights so that we can better understand your preferences and interests, personalise your experience and enhance the products and services that you receive."
            />
            <Typography
              tag="p"
              text="Do we use your personal information for marketing?"
            />
            <Typography
              tag="p"
              text="We and/or our carefully selected business partners may send you direct marketing communications and information about our products and services. This may take the form of emails, SMS, mail or other forms of communication, in accordance with the Spam Act and the Privacy Act."
            />
            <Typography tag="p" text="You may opt-out of r" />
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
