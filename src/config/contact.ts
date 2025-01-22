import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { Contact } from 'types'

export const resumeContact: Contact = {
  name: 'Resume',
  url: 'https://drive.google.com/file/d/1EWq28CeiaKtv0zjS7SeeM7UHIWCBzVsS/view?usp=sharing',
  faIcon: faFileLines,
}

export const contacts: Contact[] = [
  {
    name: 'Github',
    url: 'https://github.com/bhonandh',
    faIcon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/bhonandh19/',
    faIcon: faLinkedin,
  },
  {
    name: 'Email',
    url: 'mailto:bhonandh19@gmail.com',
    faIcon: faEnvelope,
  },
  resumeContact,
]
