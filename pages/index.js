import Link from "next/link";
import Layout from "../components/Layout";
import { Skills, Experiences, Projects } from "../profile";

console.log(Skills)

const Index = () => (
    <Layout>
        {/*Header card*/}
        <header className="row">
            <div className="col-md-12">
                <div className="card text-white bg-dark mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            {/*Aqui va mi foto*/}
                            <img src="me.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Juan Loaiza</h1>
                            <h3>Backend developer, computer engineer student and computation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link
                                href="/hireme" passHref>
                                <button component="a" type="button" className="btn btn-dark" >Hire me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second section*/}
        {/**Skills */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card border-info mb-3">
                    <div className="card-header">
                        <h1 style={{ textAlignVertical: "center", textAlign: "center", }}>Skills</h1>
                    </div>
                    <div className="card-body" style={{ textAlignVertical: "center", textAlign: "center", }}>
                        {
                            Skills.map((data, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{data.skill}</h5>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                            role="progressbar" style={{ width: `${data.percentage}%` }}
                                            aria-valuenow="50"
                                            aria-aria-valuemin="0"
                                            aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/**Experiences */}
            <div className="col-md-8">
                <div className="card border-light mb-3">
                    <div className="card-header">
                        <h1 style={{ textAlignVertical: "center", textAlign: "center", }}> Experience</h1>
                    </div>
                    <div className="card-body">
                        <ul>
                            {
                                Experiences.map(({ title, description, from, to }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{from}-{to}</h5>
                                        <p>{description}</p>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </div>
                </div>
                {/** REMEMBER TO FILL UP THIS BLANK SPACE WITH SOMENTHIN IDK BUT IM MUST DO IT, A VIDEO WOULD BE GREAT<*/}
            </div>
        </div>
        {/** Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card border-dark mb-3">
                    <div className="card-header">
                        <h1 style={{ textAlignVertical: "center", textAlign: "center", }}> Portfolio </h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        {
                        Projects.map((data, i) => (
                            <div className="col-md-4 p-2" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                        <img src={data.imgRef} alt="" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="p-1">{data.name}</h3>
                                        {/** Aca debe salir una animacion a la hora de poner el mouse encima con las tecnologias de data.technologies*/}
                                        <p className="text-secondary p-1">{data.technologies}</p>
                                        <p>{data.description}</p>
                                        <Link href={data.link} passHref>
                                            <button component="a" type="button" className="btn btn-dark button-centered-own" >Github page</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;