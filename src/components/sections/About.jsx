import { Heart, Award, Clock, Users } from 'lucide-react'

const About = () => {
    const valors = [
        {
            icon: Heart,
            titol: "Passió artesana",
            descripcio: "Cada gelat és elaborat a diari i amb dedicació, seguint receptes tradicionals perfeccionades amb els anys"
        },
        {
            icon: Award,
            titol: "Qualitat superior",
            descripcio: "Només utilitzem ingredients naturals de primera qualitat i de proximitat, sense conservants artificials"
        },
        {
            icon: Clock,
            titol: "Tradició familiar",
            descripcio: "Més de deu anys servint als veïns de Caldes de Montbui amb la mateixa il·lusió del primer dia"
        }

    ]

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-cream to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header de la secció */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Coneix-nos
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Descobreix la història darrere dels millors gelats artesans del Vallès
                    </p>
                </div>

                {/* Història principal */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h3 className="font-display text-3xl font-semibold text-gray-900 mb-6">
                            La nostra història
                        </h3>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                La Cafeteria Gelateria Iseo neix de la passió per crear moments dolços i especials
                                al cor de Caldes de Montbui. Des dels nostres inicis, hem mantingut l'essència
                                artesana en cada un dels nostres productes.
                            </p>
                            <p>
                                Els nostres gelats s'elaboren diàriament amb ingredients frescos i naturals,
                                seguint receptes tradicionals que garanteixen aquesta textura cremosa i sabors
                                autèntics que ens caracteritzen.
                            </p>
                            <p>
                                A més dels gelats, oferim una selecció acurada de cafès de qualitat superior,
                                creps casolanes, entrepans frescos i pastes elaborades cada matí al nostre obrador.
                            </p>
                        </div>
                    </div>

                    {/* Placeholder per imatge */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-gelato-200 to-gelato-300 rounded-2xl h-80 flex items-center justify-center">
                            <div className="text-center text-gelato-600">
                                <div className="text-6xl mb-4">🏪</div>
                                <p className="font-medium">Foto de la cafeteria</p>
                                <p className="text-sm opacity-75">Imatge pròximament</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Valors i característiques */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {valors.map((valor, index) => {
                        const IconComponent = valor.icon
                        return (
                            <div
                                key={index}
                                className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:bg-gelato-50 transition-all duration-300">
                                    <IconComponent className="h-8 w-8 text-gelato-500 group-hover:text-gelato-600" />
                                </div>
                                <h4 className="font-display text-xl font-semibold text-gray-900 mb-2">
                                    {valor.titol}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {valor.descripcio}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Compromís de qualitat */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gelato-100">
                    <div className="text-center">
                        <h3 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                            El nostre compromís
                        </h3>
                        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                            Ens comprometem a mantenir la màxima qualitat en tots els nostres productes,
                            utilitzant només ingredients naturals i frescos. La satisfacció dels nostres
                            clients és la nostra major recompensa, i cada dia treballem per superar les
                            seves expectatives amb productes excepcionals i un servei càlid i proper.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About