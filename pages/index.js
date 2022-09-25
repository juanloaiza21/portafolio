import Link from "next/link";
import Layout from "../components/Layout";
import { Skills } from "../profile";
const Index = () => (
    <Layout>
        {/*Header card*/}
        <header className="row">
            <div className="col-md-12">
                <div className="card text-white bg-dark mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            {/*Aqui va mi foto*/}  
                            <img src="me.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Juan Loaiza</h1>
                            <h3>Backend developer and computer engineer student</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link
                                href="/hireme" passHref>
                                <button component="a" type="button" class="btn btn-dark" >Hire me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* Second section*/}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card border-info mb-3">
                    <div className="card-body">
                        <h1>Skills</h1>
                        
                        {
                            Skills.map(({skill, percentage}, i) =>{
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div class="progress">
                                        <div 
                                        className="progress-bar 
                                        progress-bar-striped 
                                        bg-info 
                                        mb-progress-bar-animated" 
                                        role="progressbar" style={{width: `${percentage}`}}></div>
                                    </div>
                                </div>
                            })
                        }
                        
                        <div class="progress">
                            <h5>Test</h5>
                            <div className="pprogress-bar progress-bar-striped bg-info mb-progress-bar-animated" role="progressbar" style={{width: '80%'}}>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card border-light mb-3">
                    <div className="card-body">
                        <h1>Expierience</h1>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;