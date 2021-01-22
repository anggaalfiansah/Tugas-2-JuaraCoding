import React, { Component } from 'react';
import { SoalData } from "./SoalData";

class Soal extends Component {
    // Untuk Validasi Radio
    constructor(props) {
        super(props)
        this.state = {
            radio: ''
        }
    }

    onRadio = (e) => {
        this.setState({
            radio: e.currentTarget.value
        });
    }

    tempatJawaban = (data) => {
        // Jika Tipe Soal Berbentuk essay
        if (data.type === 'essay') {
            return (
                <textarea className="form-control"></textarea>
            )
        }
        // Jika Tipe Soal Berbentuk checkbox
        else if (data.type === 'checkbox') {
            return (
                <div className="form-group">
                    {data.option.map((check, key) => {
                        return (
                            <div className="form-check" key={key}>
                                <input className="form-check-input" type="checkbox" defaultValue={check} id="option" />
                                <label className="form-check-label">{check}</label>
                            </div>
                        )
                    })}
                </div>
            )
        }
        // Jika Tipe Soal Berbentuk radio (a,b,c,d)
        else if (data.type === 'radio') {
            return (
                <div>
                    <div className="form-check">
                        <input className="form-check-input" id="a" type="radio" value={data.a} checked={this.state.radio === data.a} onChange={this.onRadio} />
                        <label className="form-check-label" htmlFor="a">{data.a}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id="b" type="radio" value={data.b} checked={this.state.radio === data.b} onChange={this.onRadio} />
                        <label className="form-check-label" htmlFor="b">{data.b}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id="c" type="radio" value={data.c} checked={this.state.radio === data.c} onChange={this.onRadio} />
                        <label className="form-check-label" htmlFor="c">{data.c}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id="d" type="radio" value={data.d} checked={this.state.radio === data.d} onChange={this.onRadio} />
                        <label className="form-check-label" htmlFor="d">{data.d}</label>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {SoalData.map((data, key) => {
                    return (
                        <div className="pt-2" key={key}>
                            <span>{key + 1}. </span><label className="form-label">{data.soal}</label>
                            {this.tempatJawaban(data)}
                            <hr />
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Soal;