import Htext from '@/Shared/Htext';
import { ClassType, SelectedPage } from '@/Shared/type';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import { motion } from 'framer-motion';
import Class from './Class';


const classes: Array<ClassType> = [
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
    {
        name: "kunal paliwal ",
        description: "hello ddsssd asffBfsdbg hbfejbf  sdfwebfbf jfbejbw fbfjbfkb nkfwf",
        image: HomePageGraphic,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) =>void;
}

const OurClasses = ({setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div 
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className='mx-auto w-5/6'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}>
                <div className="md:w-3/5">
                    <Htext>
                        OUR CLASSES
                    </Htext>
                    <p className='py-5 '>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eum veritatis itaque necessitatibus, similique, cum ratione aut, eligendi
                       exercitationem quo atque laudantium iusto.
                      Possimus ad suscipit eligendi atque. Ratione, eos similique!
                    </p>
                </div>

            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index)=>(
                        <Class 
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    ))}

                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses