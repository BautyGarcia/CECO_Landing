"use client";

import { Group, Text, Title, Image, Space } from '@mantine/core';


const Banner = () => {

    return (
        <div className="flex items-center justify-center mt-48">
            <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-xl">
                <div className="flex items-center">
                    <div className="flex-grow w-70">
                        <Title order={2}>CECO - El Producto</Title>
                        <Space h="xs" />
                        <Text size="sm" className="text-gray-600">
                            CECO es un dispositivo de enseñanza y concientización acerca de la sustentabilidad, que ayuda a niños de edad escolar a generar el hábito de reciclado desde una temprana edad. Plantea la solución a una problemática real y concreta, no solo fomenta la sustentabilidad, sino que también fue realizado de forma sustentable desde lo económico y tecnológico enmarcado en la economía circular. El proyecto es escalable de forma muy sencilla gracias a la utilización de materiales reciclados para su fabricación. Creemos que el reciclado no debería ser una obligación, sino un placer, y por eso a través de la metodología “Learning by doing”, el proyecto invita a la comunidad educativa a aprender sobre el correcto reciclado de los residuos de manera lúdica e interactiva.                        </Text>
                    </div>
                    <div className="flex-shrink-0 w-30">
                        <Image
                            src="image.png"
                            alt="Side Image"
                            width={130}
                            height={200}
                            className="rounded-full ml-10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;