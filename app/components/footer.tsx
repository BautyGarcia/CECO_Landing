"use client";

import { createStyles, rem } from '@mantine/core';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#ccebd6",

    borderTop: `${rem(1)} solid #ccebd6`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image src="/trashCan.ico" width={50} height={60} alt='footerIcon'/>
      </div>
    </div>
  );
}

export default Footer;