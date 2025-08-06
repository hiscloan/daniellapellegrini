import 'aos/dist/aos.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
// src/pages/About.jsx 

export default function About() {
  return (
    
    <div className="min-h-screen text-gray-900 p-6">
    <h1 className="text-5xl font-extrabold text-center mb-12 a text-blue-950" data-aos="fade-down">
        About Daniella
    </h1>

      <section className="p-8 bg-orange-50 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl" data-aos="zoom-in" data-aos-delay="100">
          <img
            src="/images/Biography_05.png"
            alt="Daniella Portrait"
            className="w-40 h-40 object-cover rounded-full mr-6 mb-4 float-left"
          />

        
        <p className="text-lg mb-4">
          In 2002, Daniella’s voice became the most heard voice in the nation when she signed a deal with SABC1 the most watched TV channel in South Africa to become their female resident voice.
        </p>
        
        <p className="text-lg mb-4">        
          In  2003, Daniella was apart of history, as the satellite platform DSTV was about to launch the country’s first youth TV channel targeted at audiences between the ages of 12-25years old called ‘GO’. 
          As a resident location presenter on ‘Vicious Delicious’ Daniella had the privilege of interviewing some of the worlds most famous DJs like Paul van Dyke and Paul Oakenfold as well as famous bands like Sepultura. 
          She had the opportunity to push herself to the limit and really experience life. With the show, Daniella went Bunji Jumping over Victoria Falls, snorkelling off the coast of Mozambique, helicopter flipping and white water rafting in Zambia, stunt flying, jet boating, drag racing, she covered an FHM calendar shoot and an MTV party to name but a few.
        </p>

        <p className="text-lg mb-4">
          In addition to being the female resident voice for SABC1, Daniella has worked with some of the world’s most exciting companies as voice artist such as Walt Disney, Nickelodeon, Ministry of Sound, BBC World, Girlfriends (TV Sitcom), Paul van Dyk and The White Stripes to name but a few.
        </p>

        <p className="text-lg mb-4">
          Daniella has also hosted many a prestigious event over the years for key leading global including L’Oreal, Garnier, Toyota, Nestle, Colgate and major sporting events like the ABSA Currie Cup Final (ABSA is a subsidiary of Barclay’s Bank). She has supplied her voice to many a radio and TV advert as well as corporate presentations.
        </p>

        <img
          src="/images/Biography_06.png"
          alt="Daniella Portrait"
          className="w-40 h-40 object-cover rounded-full mr-6 mb-4 float-right"
        />
        <p className="text-lg mb-4">
          In 2006 Daniella relocated to London where she has been training as an actor and has had the good fortune to meet some of the industries finest; actor Kevin Spacey, producers Kia Jam (Lucky Number Slevin and Lord of War) and Mark Harris (Crash starring Sandra Bullock); writer David Ward (Fly Boys, Zorro, The Sting and Sleepless in Seattle). Daniella has also trained with some of the best show business has to offer - Shaila Rubin (Captain Corelli’s Mandolin); agent Mara Santino (KSA) as well as acting coach Bernard Hiller. She has also been actively training in London with The Actors Temple, The Comedy School as a stand up comedian and as a singer at VoxBox Studios.
        </p>        

      </section>
    </div>
  )
}