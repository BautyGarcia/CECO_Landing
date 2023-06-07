"use client";

import { Text, Title, Space, rem, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },
}));

const Banner = () => {
    const { classes } = useStyles();
    const largeScreen = useMediaQuery('(min-width: 992px)');

    return (
        <div className="flex items-center justify-center mt-16">
            <div className={largeScreen ? "w-[60%] p-6 bg-white rounded-lg shadow-md" : "w-[90%] p-6 bg-white rounded-lg shadow-md"}>
                <div className={largeScreen ? "flex items-center" : "flex-col items-center"}>
                    <div className={largeScreen ? "flex-grow w-70" : "w-full"}>
                        <Title order={2} align={largeScreen ? 'start' : 'center'} className={classes.title}>CECO - El Producto</Title>
                        <Space h="xs" />
                        <Text c="dimmed" size="sm" className="text-[16px]">
                            CECO es un dispositivo de enseñanza y concientización acerca de la sustentabilidad, que ayuda a niños de edad escolar a generar el hábito de reciclado desde una temprana edad. Plantea la solución a una problemática real y concreta, no solo fomenta la sustentabilidad, sino que también fue realizado de forma sustentable desde lo económico y tecnológico enmarcado en la economía circular. El proyecto es escalable de forma muy sencilla gracias a la utilización de materiales reciclados para su fabricación. Creemos que el reciclado no debería ser una obligación, sino un placer, y por eso a través de la metodología “Learning by doing”, el proyecto invita a la comunidad educativa a aprender sobre el correcto reciclado de los residuos de manera lúdica e interactiva.
                        </Text>
                    </div>
                    <div className={largeScreen ? "flex-shrink-0 w-30" : "mt-10 w-full"}>
                        <Image
                            src="/image.png"
                            alt="Side Image"
                            width={130}
                            height={200}
                            className={largeScreen ? "ml-10" : "mx-auto"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;