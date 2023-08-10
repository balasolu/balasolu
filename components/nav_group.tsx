import NavLink from "./nav_link";

export default function NavGroup() {
  return (
    <div className="p-8 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <NavLink
        href={`/family`}
        blank={false}
        title={"Family"}
        description={
          "You wouldn't try to upsell your own family so why would we? Get only what you need. Nothing more. Nothing less."
        }
      />
      <NavLink
        href={`/network`}
        blank={false}
        title={"Network"}
        description={
          "Of course we are going to link to some of the projects we are developing and hosting. Here, you could find exactly those."
        }
      />
      <NavLink
        href={`/people`}
        blank={false}
        title={"People"}
        description={
          "These are our people. This is where we come from. We're giving this life everything we got and then some."
        }
      />
      <NavLink
        href={`/pricing`}
        blank={false}
        title={"Pricing"}
        description={
          "We wish to remain as transparent as possible about our pricing. Affordable flat rates and pay-as-you-go usage is what sets us apart."
        }
      />
      <NavLink
        href={`/reach`}
        blank={false}
        title={"Reach"}
        description={
          "Can you reach the people who develop and host your website? We are reachable by voice and text and understand that your business is your bread and butter."
        }
      />
      <NavLink
        href={`/stack`}
        blank={false}
        title={"Stack"}
        description={
          "This is not your mother's WordPress or Wix house. Our inclination is to utilize more performant tooling for better customer experiences."
        }
      />
    </div>
  );
}
