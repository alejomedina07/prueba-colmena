import Image                 from 'next/image'
import { Button, Container } from '@mui/material';
import Link                  from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-logo-colmena p-2">
        <Image
          src="/logocolmena-new.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={500}
          height={200}
          priority
        />
      </div >
      <div className="w-full h-full container-home">
        <Container maxWidth="lg">
          <div className='welcome-container p-8'>
            <div className="flex flex-row items-start">
              <h1>Prueba Realizada por: <br/> <b>ALEJANDRO MEDINA RUIZ</b></h1>
            </div>
            <div className="flex flex-row items-center my-8">
              <p className="flex-1">
                Explora una demostración poderosa de tecnologías web de vanguardia. Descubre cómo Next.js, Redux Toolkit, React Hook Form y Material-UI se combinan para crear experiencias de usuario sorprendentes. Gestiona formularios sin esfuerzo, optimiza el estado de la aplicación y diseña interfaces elegantes. Esta demo te muestra el potencial ilimitado de estas herramientas líderes en la industria. ¡Explora y experimenta!
              </p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <span>
                <Link href="/posts">
                  <Button variant="outlined" className="init-button">Iniciar</Button>
                </Link>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
