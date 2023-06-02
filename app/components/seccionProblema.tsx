"use client";

import { Container, Title, createStyles, rem, Text, Group, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

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
    const largeScreen = useMediaQuery('(min-width: 79em)');
    
    return (
        <Container size="lg" py="xl" className='my-48'>
            <Title order={2} className={classes.title} ta="center" mt="sm">
                La problemática
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Esta es la triste y dura realidad a la que nos encontramos dia a dia, ignoramos, pero creemos que podemos cambiarla.
            </Text>

            <div className={ largeScreen ? "mt-10 flex items-center" : "mt-10 flex-col items-center" }>
                <div className={ largeScreen ? "w-4/6 overflow-hidden" : "w-full overflow-hidden" }>
                    <Image
                        src="https://images.unsplash.com/photo-1526951521990-620dc14c214b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                        alt="Side Image"
                        width="100%"
                        height={650}
                        radius="md"
                        fit="cover"
                    />
                </div>
                <div className={ largeScreen ? "z-10 w-2/6 bg-[#FFF] rounded-md absolute translate-x-[32rem] shadow-md max-h-[480px] min-w-[640px]" : "z-10 w-full bg-[#FFF] rounded-md" }>
                    <Title order={2} className={classes.title} ta="center" mt="md">
                        La Basura
                    </Title>
                    <Text c="dimmed" ta="center" p="lg" className="">
                        En nuestra realidad actual, nos enfrentamos a una problemática alarmante y desafiante: la contaminación por basura. Cada día, toneladas de desechos son generados y descartados de manera irresponsable, convirtiéndose en una amenaza invisible pero tangible para nuestro entorno. Este flagelo se manifiesta de manera impactante en las conocidas &quot;islas de basura&quot;, vastas extensiones de residuos flotantes en nuestros océanos, como un triste recordatorio de nuestras acciones irresponsables. Estas islas no solo representan un peligro para la vida marina, sino también para la salud de nuestro planeta en su conjunto. Como jóvenes, es nuestro deber comprender y difundir la importancia del reciclaje como una forma efectiva de combatir esta contaminación desenfrenada. Cada gesto de reciclaje cuenta, ya que contribuye a la reducción de desechos y a la conservación de nuestros valiosos recursos naturales. Es hora de despertar nuestra conciencia e impulsar cambios significativos en nuestras prácticas diarias. A través de la educación y la acción conjunta, podemos marcar la diferencia y asegurar un futuro sostenible, libre de las garras de la contaminación por basura.
                    </Text>
                </div>
            </div>
        </Container>
    )
}

export default PresentacionProblema;