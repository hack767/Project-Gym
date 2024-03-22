import { SelectedPage } from '@/Shared/type'
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    icons: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const childVariants = {
    hidden: { opacity: 0, scale: 0.89},
    visible: { opacity: 1, scale: 1},
}

const Benefit = ({icons, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div  
    variants={childVariants}
    className="mt-5 rounded-md border-2 border-gray-100 ">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-400">
                    {icons}
            </div>

        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
    </motion.div>
  )
}

export default Benefit