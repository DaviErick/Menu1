import React from 'react'
import '../App.css';
import { CgBell } from "react-icons/cg";
import { CgNotifications } from "react-icons/cg";
import { BsPersonCircle } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { SidebarData } from './SidebarData';
function Sidebar(){
    return(
    <div className='container'>
        
        <div className='Sidebar'>
            <ul className='SidebarList'>
            <li className='Perfil'>
                <div className='icone'>
                <BsPersonCircle />
                </div>
                <span className='Nome'>Bem vindo, Hernany</span>
                <span className='funcao'>Programador Sênior</span>
            </li>
            {SidebarData.map((val, key) => {
                return <li key={key}
                className='row'
                id={window.location.pathname == val.link ? "active" : ""}
                onClick={() => {window.location.pathname = val.link}}>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    
                    </li>

            })}
            </ul>
            

        </div>
        <div className='conteudo'>
            <div className='header'>
                <div className='notifications'>
                    <div className='notification'>
                    <div className='numero-notificacao'>
                            <span>2</span>
                        </div>
                        <CgNotifications />
                    
                        
                    </div>
                    <div className='notification'>
                    <div className='notification'>
                    <div className='numero-notificacao' style={{left: '41.8%'}}>
                            <span>5</span>
                        </div>
                        <BiMessageDetail />
                    
                        
                    </div>
                    </div>
                    <div className='notification'>
                    <div className='notification'>
                    <div className='numero-notificacao' style={{left: '33.5%'}}>
                            <span>7</span>
                        </div>
                        <CgBell />
                    
                        
                    </div>
                    </div>
                </div>
            </div>
            <div className='r1'> </div>
            <div className='r2'>
                <div className='card'>
                    <div className='icone-card'></div>
                    <div className='texto-icone1'></div>
                    <div className='texto-icone2'></div>
                    <div className='card-footer'></div>
                </div>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
            </div>
            <div className='r3'>
                <div className='card'></div>
                <div className='card'></div>
                <div className='card'></div>
            </div>

        </div>
        </div>

    )

}
export default Sidebar