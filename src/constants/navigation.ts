export const navigation = [
  {labelKey: 'home', href: '/'},
  {
    labelKey: 'services',
    href: '/services',
    children: [
      {label: 'Telecom & Network Services', href: '/services/network-services'},
      {label: 'Web Development', href: '/services/web-development'},
      {label: 'Mobile App Development', href: '/services/mobile-app-development'},
      {label: 'Custom Software Development', href: '/services/custom-software-development'},
      {label: 'API & System Integration', href: '/services/api-integrations'},
      {label: 'Cloud & DevOps', href: '/services/cloud-devops'}
    ]
  },
  // {labelKey: 'industries', href: '/industries'},
  // {labelKey: 'caseStudies', href: '/case-studies'},
  {labelKey: 'about', href: '/about'},
  {labelKey: 'careers', href: '/careers'},
  {labelKey: 'contact', href: '/contact'}
];
