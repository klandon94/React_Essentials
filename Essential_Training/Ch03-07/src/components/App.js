import {Component} from 'react'
import {SkiDayList} from "./SkiDayList"
import {SkiDayCount} from "./SkiDayCount"
import {AddDayForm} from "./AddDayForm"
import {Menu} from './Menu'

export class App extends Component{
    constructor(props){
        super(props)
        // Functions as getInitialState() method
        this.state = {
            allSkiDays:[
                {
                    resort: "Vail",
                    date: new Date("12/10/2018"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Taos",
                    date: new Date("11/20/2018"),
                    powder: true,
                    backcountry: true
                },
                {
                    resort: "Whitetail",
                    date: new Date("12/29/2018"),
                    powder: true,
                    backcountry: false
                },
            ]
        }
    }
    // // When app renders for first time, how state is initialized
    // getInitialState(){
    //     return {
    //         allSkiDays:[
    //             {
    //                 resort: "Vail",
    //                 date: new Date("12/10/2018"),
    //                 powder: true,
    //                 backcountry: true
    //             },
    //             {
    //                 resort: "Taos",
    //                 date: new Date("11/20/2018"),
    //                 powder: true,
    //                 backcountry: true
    //             },
    //             {
    //                 resort: "Whitetail",
    //                 date: new Date("12/29/2018"),
    //                 powder: true,
    //                 backcountry: false
    //             },
    //         ]
    //     }
    // }
    countDays(filter){
        const {allSkiDays} = this.state
        return allSkiDays.filter((day) => (filter) ? day[filter] : day).length
    }
    render() {
        return (
            <div className="app">
            <Menu />
            {
            (this.props.location.pathname === "/") ?
                <SkiDayCount total={this.countDays()}
                    powder={this.countDays("powder")}
                    backcountry={this.countDays("backcountry")}/> :
            (this.props.location.pathname === "/add-day") ?
                <AddDayForm /> :
                <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
            }
            </div>
        )
    }
}