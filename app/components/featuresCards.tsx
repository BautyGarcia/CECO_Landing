"use client";

import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
} from '@mantine/core';
import { IconBulb, IconBox, IconDeviceLaptop } from '@tabler/icons-react';

const mockdata = [
    {
        title: 'Sistema de apertura',
        description:
            'Cada contenedor está equipado con un mecanismo de apertura, como una tapa o una compuerta, que permite depositar los residuos de manera segura y mantenerlos separados.',
        icon: IconBox,
    },
    {
        title: 'Pantalla interactiva',
        description:
            'CECO cuenta con una pantalla táctil o interactiva conectada al dispositivo. En la pantalla, se muestran opciones y categorías para que el usuario seleccione el tipo de residuo que desea desechar. La pantalla también puede mostrar información educativa, como el proceso de reciclaje y la importancia de la clasificación adecuada.',
        icon: IconDeviceLaptop,
    },
    {
        title: 'Luces indicadoras',
        description:
            'CECO puede estar equipado con luces indicadoras LED que se encienden para guiar al usuario sobre en qué contenedor debe depositar el residuo seleccionado.',
        icon: IconBulb,
    },
];

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

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: "#38d49c",
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

const FeaturesCards = () => {
    const { classes } = useStyles();
    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color="#38d49c" />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <>
            <Container size="lg" py="xl" className='my-24'>
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Los principios de funcionamiento de CECO
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Dispositivos mecánicos y electrónicos que buscan lograr su objetivo de facilitar la clasificación de residuos.
                </Text>

                <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                    {features}
                </SimpleGrid>
            </Container>
        </>
    );
}

export default FeaturesCards;