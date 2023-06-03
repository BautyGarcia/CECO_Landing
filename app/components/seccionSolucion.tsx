"use client"

import { Container, createStyles, rem, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Banner from './banner'
import FeaturesCards from './featuresCards'

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

const PresentacionSolucion = () => {
    const { classes } = useStyles();
    const largeScreen = useMediaQuery('(min-width: 992px)');

    return (
        <>
            <Container size="lg" py="xl">
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    La Solución
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Despues de ver y entender al problema que nos enfrentamos. Nos pusimos manos a la obra e ideamos nuestra forma de cambiar el mundo.
                </Text>
            </Container>
            <Banner />
            <FeaturesCards />
        </>
    )
}

export default PresentacionSolucion;