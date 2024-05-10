import React from 'react'
import './Perfil.css'

function PerfilMeu() {
    return (
        <div className='container-line'>
            <span>PERFIL</span>
            <div className='content-about'>
                <p>Profissional em formação na Área de Engenharia de Software, desde 2019 atuando como desenvolvedor com tecnologias FullStack, e principalmente no setor de E-commerce</p>
                <p>Me considero uma pessoa focada nos meus objetivos e pró ativa, graças a experiências no mercado. Hoje estou me realocando para a área de ciência / visualização de dados.</p>
                <p>Me orgulho dos seguintes trabalhos:</p>
                <ul>
                    <li>Implementação da aplicação web <a href='https://www.santander.com.br/hotsite/santanderfinanciamentos/' target='_blank'>Santader Financiamentos</a> | participei do desenvolvimento Front end da aplicação e integração com API</li>
                    <li>Crianção da página da parceria entre a loja Labella Mafia com a PlayBoy. A plataforma vtex io para codificação, html css e javascript</li>
                    <li>Implementação da aplicação web <a href='https://tatazentilbeauty.com.br/' target='_blank'>Tatazentil beauty</a> | aplicação desenvolvida em React e com nota 92 em SEO pelo PageSpeed</li>
                    <li>Implementação do setor comercial na empresa junior <a href='https://unect.com.br/' target='_blank'>Unect Jr.</a> | eloboração de rotinas de prospecção, eloboração de proposta comercial, precificação, elicitação de requisitos entre outras atividades</li>
                </ul>
            </div>
            <span>EXPERIÊNCIA</span>
            <div className='content-about'>
                <div className='content-experiencias'>
                    <div>
                        <p><b>Maeztria Group</b></p>
                        <p>Frontend Developer | Mid-level II</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Atuação em Squad no modelo scrum, com profissionais multidisciplinares. </p>
                        <p>Criação e manutenção em app custom utilizando React, typescript, js vanilla entre outras ferramentas.</p>
                    </div>
                </div>
                <div className='content-experiencias'>
                    <div>
                        <p><b>CheckStore</b></p>
                        <p>FullStack Developer</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Desenvolvimento React, criação de scripts javascript vanilla, configuração plataforma. </p>
                    </div>
                </div>
                <div className='content-experiencias'>
                    <div>
                        <p><b>Avanti</b></p>
                        <p>FullStack Developer</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Desenvolvimento de layouts responsivos junto a plataforma vtex cms / io, integração com banco de dados nativo e consumo de de api 's externas.</p>
                        <p>Comunicação clara sobre as demandas e requisitos, Desenvolver códigos com boa manutenibilidade, refatoração de código legado, aplicação de padrões de desenvolvimento da empresa</p>
                    </div>
                </div>
                <div className='content-experiencias'>
                    <div>
                        <p><b>Yankton Technologies</b></p>
                        <p>Frontend Developer</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Desenvolvimento web E-commerce e aplicações web, desenvolvimento de grandes projetos como o etf.com.vc utilizando next Js com a estrutura de componentes, e o Santander financiamentos utilizando stack web.</p>
                    </div>
                </div>
                <div className='content-experiencias'>
                    <div>
                        <p><b>Unect Jr</b></p>
                        <p>Diretor Comercial e assessor administrativo</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Passei pelos setores administrativo e comercial, assumindo cargo de liderança em 2020, responsável pelo treinamento do setor nas áreas de precificação, apresentação de proposta comercial, negociação,  prospecção ativa e passiva. </p>
                    </div>
                </div>
                <div className='content-experiencias'>
                    <div>
                        <p><b>Buzz</b></p>
                        <p>Estagiário</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Desenvolvimento para e-commerce utilizando Magento 1 e 2, Javascript vanila e wordpress.</p>
                    </div>
                </div>
            </div>
            <span>FORMAÇÃO</span>

            <div className='content-about'>
                <div className='content-experiencias'>
                    <div>
                        <p><b>Universidade Tecnológica Federal Do Paraná</b></p>
                        <p>Engenharia de Software</p>
                    </div>
                    <div className='seccond-content'>
                        <p>Princípios e práticas fundamentais relacionadas ao desenvolvimento de software. Ao longo do programa, estudei disciplinas como algoritmos, estruturas de dados, programação orientada a objetos, design de software, engenharia de requisitos, desenvolvimento de sistemas distribuídos e engenharia de software ágil. </p>
                        <p>Além disso, participei de projetos práticos e colaborativos, onde pude aplicar esses conhecimentos em situações do mundo real.</p>
                    </div>
                </div>
                <div className='content-experiencias'>
                    <div>
                        <p><b>ETEC Rodrigues de Abreu</b></p>
                        <p>Técnico em Administração</p>
                    </div>
                    <div className='seccond-content'>
                        <p>adquiri conhecimentos fundamentais sobre a gestão de negócios.  </p>
                        <p>Ao longo do programa, aprendi sobre contabilidade, marketing, recursos humanos, finanças e operações empresariais. Além disso, desenvolvi habilidades práticas, como comunicação eficaz e pensamento crítico, que eram essenciais para o sucesso profissional.</p>
                    </div>
                </div>
                <span>CURSOS</span>
            </div>
        </div>
    )
}

export default PerfilMeu