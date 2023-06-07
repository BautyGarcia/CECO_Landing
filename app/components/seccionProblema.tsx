"use client";

import { Container, Title, createStyles, rem, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,
        color: "#121212",

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: "#38d49c",
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
}));
const PresentacionProblema = () => {
    const { classes } = useStyles();
    const largeScreen = useMediaQuery('(min-width: 992px)');

    return (
        <Container size="lg" py="xl" className='my-24'>
            <Title order={2} className={classes.title} ta="center" mt="sm">
                La problemática
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Esta es la triste y dura realidad a la que nos encontramos dia a dia, ignoramos, pero creemos que podemos cambiarla.
            </Text>

            <div className={largeScreen ? "mt-16 flex items-center" : "mt-16 flex-col items-center"}>
                <div className={largeScreen ? "w-4/6 overflow-hidden" : "w-full overflow-hidden"}>
                    <Image
                        src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                        alt="Side Image"
                        height={largeScreen ? 750 : 500}
                        width={largeScreen ? 700 : 350}
                        className="rounded-lg"
                    />
                </div>
                <div className={largeScreen ? "z-10 w-2/6 bg-[#FFF] rounded-md absolute translate-x-3/4 shadow-md max-h-[480px] min-w-[640px]" : "z-10 w-full bg-[#FFF] rounded-md shadow-md"}>
                    <Title order={2} className={classes.title} ta="center" mt="sm" pt={ largeScreen ? "xs" : "sm"}>
                        Basura
                    </Title>
                    <Text c="dimmed" ta="center" p="lg">
                        En nuestra realidad actual, nos enfrentamos a una problemática alarmante y desafiante: la contaminación por basura. Cada día, toneladas de desechos son generados y descartados de manera irresponsable, convirtiéndose en una amenaza invisible pero tangible para nuestro entorno. Este flagelo se manifiesta de manera impactante en las conocidas &quot;islas de basura&quot;, vastas extensiones de residuos flotantes en nuestros océanos, como un triste recordatorio de nuestras acciones irresponsables. Estas islas no solo representan un peligro para la vida marina, sino también para la salud de nuestro planeta en su conjunto.
                    </Text>
                </div>
            </div>
            <div className={largeScreen ? "mt-20 flex items-center ml-auto" : "mt-10 flex-col items-center ml-auto"}>
                <div className={largeScreen ? "w-4/6 overflow-hidden order-2 ml-auto mr-0" : "w-full overflow-hidden"}>
                    <Image
                        src="https://media.discordapp.net/attachments/1006693019535298580/1114632924747280444/luchetti_an_image_that_represents_misinformation_it_should_be_f_65682816-9b49-4b1f-a12c-25a9398c444e.png?width=1356&height=903"
                        alt="Side Image"
                        height={largeScreen ? 750 : 350}
                        width={largeScreen ? 700 : 350}
                        className="rounded-lg"
                    />
                </div>
                <div className={largeScreen ? "z-10 w-2/6 bg-[#FFF] rounded-md absolute shadow-md max-h-[480px] min-w-[640px] order-1 mx-auto" : "z-10 w-full bg-[#FFF] rounded-md order-2 shadow-md"}>
                    <Title order={2} className={classes.title} ta="center" mt="sm" pt={ largeScreen ? "xs" : "sm"}>
                        Desinformacion
                    </Title>
                    <Text c="dimmed" ta="center" p="lg">
                        Hoy en dia, nos encontramos ante un preocupante problema relacionado con la desinformación acerca del reciclaje. Lamentablemente, las instituciones educativas suelen pasar por alto la importancia de este tema crucial en su plan de estudios. Esta falta de énfasis y atención resulta en una alarmante falta de conocimiento entre la población, lo que perpetúa la problemática de la contaminación por basura. Incluso cuando los contenedores verdes están disponibles en nuestras comunidades, su simple presencia no garantiza una solución efectiva. Sin el adecuado nivel de educación y conciencia sobre el reciclaje, muchas personas no tienen la voluntad necesaria para separar sus residuos y llevar a cabo esta práctica de manera adecuada.
                    </Text>
                </div>
            </div>
            <div className={largeScreen ? "mt-20 flex items-center" : "mt-10 flex-col items-center"}>
                <div className={largeScreen ? "w-4/6 overflow-hidden" : "w-full overflow-hidden"}>
                    <Image
                        src="https://images.unsplash.com/photo-1483213097419-365e22f0f258?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Side Image"
                        height={largeScreen ? 750 : 350}
                        width={largeScreen ? 700 : 350}
                        className="rounded-lg"
                    />
                </div>
                <div className={largeScreen ? "z-10 w-2/6 bg-[#FFF] rounded-md absolute translate-x-3/4 shadow-md max-h-[480px] min-w-[640px]" : "z-10 w-full bg-[#FFF] rounded-md shadow-md"}>
                    <Title order={2} className={classes.title} ta="center" mt="sm" pt={ largeScreen ? "xs" : "sm"}>
                        Un Acercamiento Errado
                    </Title>
                    <Text c="dimmed" ta="center" p="lg" className="">
                        El enfoque equivocado en la lucha contra la contaminación y la protección del planeta se centra en educar a las generaciones mayores, aunque cambiar sus hábitos resulta difícil. En cambio, debemos dirigirnos a los niños en edad escolar, desde jardín de infantes hasta primaria, para fomentar un gusto por el reciclaje y las prácticas ecológicas desde temprana edad. Al hacer que el reciclaje sea divertido y emocionante para ellos, cultivamos actitudes positivas y valores de responsabilidad ambiental. Al empoderar a los niños como agentes de cambio, estamos construyendo una base sólida para un futuro sostenible y promoviendo una mentalidad en la que el respeto por el planeta sea fundamental.
                    </Text>
                </div>
            </div>
        </Container>
    )
}

export default PresentacionProblema;