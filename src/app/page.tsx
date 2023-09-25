import Image from "next/image";

import { Platforms } from "@/components/Platforms";
import { Overlay } from "@/components/Overlay";
import { CTA } from "@/components/CTA";
import { HeroVideo } from "@/components/HeroVideo";
import { TournamentsCard } from "@/components/TournamentsCard";

import HeroBG from '/public/images/image4.png'
import Logo from '../../public/images/logo.svg'
import Torneios from '../../public/images/Torneios.svg'
import Itens from '../../public/images/itens.svg'
import Creditos from '../../public/images/creditos.svg'
import Personagem1 from '../../public/images/Blob(6).svg'
import Personagem2 from '../../public/images/Blob (1).svg'
import Personagem3 from '../../public/images/starwars.svg'
import Personagem4 from '../../public/images/Blob-1.svg'
import Personagem5 from '../../public/images/Blob-2.svg'
import Personagem6 from '../../public/images/Blob (2).svg'
import Personagem7 from '../../public/images/image 19.svg'
import Personagem8 from '../../public/images/image20.svg'
import Personagem9 from '../../public/images/image 13.svg' 
import Passe from '../../public/images/passe.svg'
import Vbucks1 from '../../public/images/image 9.svg'
import Vbucks2 from '../../public/images/image 10.svg'
import Vbucks3 from '../../public/images/image 11.svg'
import Vbucks4 from '../../public/images/image 12.svg'
import Friends from '../../public/images/image 1.svg'

import { SectionTitle } from "@/components/SectionTitle";
import { VBucksCard } from "@/components/VBucksCard";
import { SkinCard } from "@/components/SkinCard";
import { ProgressBar } from "@/components/ProgressBar";

export default function Home() {
  return (
    <>
      <section className={`h-fit md:h-[90vh] relative w-full px-4 animate-hero_bg bg-cover  bg-center`}>
        <ProgressBar />
        <Overlay />
        {/* <Image 
          src={HeroBG}
          alt=""
          fill
          className="w-full h-full object-fill absolute top-0 left-0"
        /> */}
        <div className="pt-48 md:pt-0 relative z-[60] grid grid-cols-6 md:grid-cols-12 gap-10 content-end w-full max-w-[1296px] h-full pb-32 mx-auto ">
          <div className="grid col-span-6 md:col-span-7 gap-7">
            <Platforms />
            <p className="text-white text-2xl">Boas vindas ao mundo de</p>
            {/* <h1 className="text-[145px] font-burbank text-white">FORNITE</h1> */}
            <Image 
              src={Logo}
              alt=""
            />
            <p className="text-white text-xl">
              Chame seus amigos e mergulhe em um jogo massivo de combate que combina saque, criação, tiroteio e caos. O resultado é uma experiência online competitiva e totalmente imprevisível que só fica maior e mais radical a cada temporada.
            </p>

            <CTA title="Jogue Agora" />
          </div>
          <div className="h-full flex items-end justify-start md:justify-end col-span-6 md:col-span-5">
            <div className="w-full max-w-[306px] h-[213px]">
              <p className="text-white font-burbank text-2xl md:text-right mb-6">Prepare-se para a batalha</p>
              <HeroVideo />
            </div>
          </div>
        </div>
      </section>
      <section className="relative top-24 py-40 bg-white">
        <div className="w-full max-w-[1296px] mx-auto ">
          <SectionTitle 
            bgImageUrl={Torneios}
            title="Melhores Torneios"
          />
          <div className="px-5 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-6">
            <TournamentsCard 
              image={Personagem1} 
              title="Campeonato da Vitória"
              weekDay="Domingos"
            />
            <TournamentsCard 
              image={Personagem2} 
              title="Construção Zero"
              weekDay="Segundas-Feiras"
            />
            <TournamentsCard 
              image={Personagem3} 
              title={`Campeonato por Grana`}
              weekDay="Várias Datas"
            />
          </div>
        </div>
      </section>
      <section className="mt-40 px-4 radial_gradient h-[578px] -skew-x-[10deg] lg:-skew-x-[25deg] overflow-x-clip">
        <div className="skew-x-[10deg] lg:skew-x-[25deg] h-full w-full max-w-[1296px] mx-auto grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6 flex items-center text-white">
            <Image 
              src={Passe}
              alt=""
              width={194}
              height={136}
            />
            <div className="w-full">
              <h2 className="text-4xl font-burbank">Passe de Batalha</h2>
              <p className="text-xl my-4">
                Suba de nível e resgate recompensas! Procurando o Pacotão de Batalha? Adicione 25 níveis ao seu Passe de Batalha a qualquer momento!
              </p>
              <CTA 
                title="Comprar Passe"
              />
            </div>
          </div>
          <div className="relative lg:col-span-6 w-full overflow-visible hidden lg:flex items-end justify-end">
            <Image 
              src={Personagem4}
              alt=""
              className="object-cover absolute bottom-0 left-10 lg:left-24"
            />
            <Image 
              src={Personagem5}
              alt=""
              className="object-cover absolute bottom-0 -right-32"
            />
          </div>
        </div>
      </section>
      <section className="relative top-16 py-40">
        <div className="w-full max-w-[1296px] mx-auto">
          <SectionTitle 
            bgImageUrl={Creditos}
            title="V-Bucks"
          />
          <div className="mt-20 px-5 grid sm:grid-cols-6 lg:grid-cols-12 gap-6">
            <VBucksCard 
              imageUrl={Vbucks1}
              price="24,90"
              quantity="1.000"
            />

            <VBucksCard 
              imageUrl={Vbucks2}
              price="62,50"
              quantity="2.800"
            />

            <VBucksCard 
              imageUrl={Vbucks3}
              price="97,50"
              quantity="5.000"
            />

            <VBucksCard 
              imageUrl={Vbucks4}
              price="246,00"
              quantity="13.500"
            />
          </div>
        </div>
      </section>
      <section className="relative top-16 py-40 overflow-hidden">
        <div className="w-full max-w-[1296px] mx-auto">
          <SectionTitle 
            bgImageUrl={Itens}
            title="Adquira Skins"
          />
          <div className="mt-20 px-5 grid sm:grid-cols-6 lg:grid-cols-12 gap-6">
            <SkinCard 
              imageUrl={Personagem6}
              charName="Duende Verde"
              season="Capítulo 3, Temporada 1" 
            />
            <SkinCard 
              imageUrl={Personagem7}
              charName="Kratos"
              season="Capítulo 2, Temporada 5" 
            />
            <SkinCard 
              imageUrl={Personagem8}
              charName="Desbravador Praiano"
              season="Capítulo 2, Temporada 3" 
            />
            <SkinCard 
              imageUrl={Personagem9}
              charName="Homem-Aranha"
              season="Capítulo 2, Temporada 5" 
            />
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[560px] grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 w-full min-h-[500px] md:h-full px-5 sm:px-9 md:px-14 lg:px-[72px] radial_gradient flex flex-col  justify-center gap-6 text-white">
          <h2 className="font-burbank uppercase text-6xl">Com amigos ou sozinho</h2>
          <p className="text-2xl lg:text-3xl">
            Em qualquer modalidade a aventura é garantida, você pode jogar para se divertir ou para ganhar recompensas em torneios. 
          </p>
          <CTA 
            title="Jogue Agora"
          />
        </div>
        <div className="col-span-12 md:col-span-6 relative w-full min-h-[500px] md:h-full">
          <Image
            src={Friends}
            alt=""
            fill
            className="object-cover "
          />
        </div>
      </section>
    </>
  )
}
