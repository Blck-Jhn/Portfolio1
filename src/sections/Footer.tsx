import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks=[
  {
    title:'Slack',
    href:'https://rocketplatformgroup.slack.com/team/U095HMJ3FRQ',
  },
  {
    title:'Discord',
    href:'https://discord.com/users/johnny2006',
  },
  {
    title:'Gmail',
    href:'mailto:johnajala84@gmail.com',
  },
  {
    title:'LinkedIn',
    href:'http://www.linkedin.com/in/john001',
  },
  {
    title:'Github',
    href:'https://github.com/BlckJhn',
  },
]
export const Footer = () => {
  return (
  <footer className="relative z-0 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10" style={{
  maskImage: 'radial-gradient(50% 50% at bottom center, black, transparent)',
}}
></div>
    <div className="container">
      <div className="border-t border-white/15 py-16 text-sm flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="text-white/40"> &copy; 2025. All rights reserved. </div>
        <nav className="flex flex-col items-center gap-8 md:flex-row">
          {footerLinks.map((link) =>(
            <a href ={link.href} key={link.title} className="inline-flex items-center gap-1.5 cursor-pointer"
            target={link.href.startsWith('http') ? '_blank' : undefined} // open an external links in new tab
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRightIcon className="w-4 h-4 "/>
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>

  );
};
