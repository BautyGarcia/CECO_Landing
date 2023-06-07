"use client";

import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Title, rem, getStylesRef } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginLeft: theme.spacing.xl,
        marginRight: theme.spacing.xl,
        marginBottom: theme.spacing.xl,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    carousel: {
        '&:hover': {
            [`& .${getStylesRef('carouselControls')}`]: {
                opacity: 1,
            },
        },
    },

    carouselControls: {
        ref: getStylesRef('carouselControls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        left: "5%",
        right: "5%",
    },

    carouselIndicator: {
        width: rem(4),
        height: rem(4),
        transition: 'width 250ms ease',

        '&[data-active]': {
            width: rem(16),
        },
    },

    carouselWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
}));

interface CardProps {
    image: string;
    title: string;
}

function Card({ image, title }: CardProps) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
        </Paper>
    );
}

const data = [
    {
        image: './cecoProducto.jpeg',
        title: 'Prototipo de CECO',
    },
    {
        image: './cecoTicExp.jpeg',
        title: 'Presentacion CECO en TIC Experience 2021',
    },
];

const CardsCarousel = () => {
    const { classes } = useStyles();
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <div className={classes.carouselWrapper}>
            <Carousel
                loop
                classNames={{
                    root: classes.carousel,
                    controls: classes.carouselControls,
                    indicator: classes.carouselIndicator,
                }}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default CardsCarousel;