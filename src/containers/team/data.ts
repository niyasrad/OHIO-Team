import test from '../../assets/image.png'
import garge from '../../assets/garge.jpg'
import raddo from '../../assets/raddo.jpg'
import kira from '../../assets/kira.jpeg'
import drock from '../../assets/drock.jpg'
import Beast from '../../assets/Beast.jpg'
import tate from '../../assets/tate.jpg'
import elo from '../../assets/elo.jpg'
interface Team{
    name: string;
    img: string;
    post: string;
}

export const teams: Array<Team> = [
    {name: "Raddoman", img: raddo, post: "CEO"},
    {name: "Mr. OHIO", img: test, post: "CTO"},
    {name: "Mikelle", img: garge, post: "TECH LEAD"},
    {name: "Lorem Ipsum", img: kira, post: "MANAGER"},
    {name: "Rock", img: drock, post: "PARTNER"},
    {name: "Pariboss Tate", img: tate, post: "SECURITY HEAD"},
    {name: "Beast", img: Beast, post: "PARTNER"},
    {name: "Elo", img: elo, post: "PARTNER"}
]