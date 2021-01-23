import React, { Component } from 'react';
import { SoalData } from "./SoalData";

class Soal extends Component {
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
                        <input className="form-check-input" type="radio" name={data.soal} id={data.a} />
                        <label className="form-check-label" htmlFor={data.a}>{data.a}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={data.soal} id={data.b} />
                        <label className="form-check-label" htmlFor={data.b}>{data.b}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={data.soal} id={data.c} />
                        <label className="form-check-label" htmlFor={data.c}>{data.c}</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name={data.soal} id={data.d} />
                        <label className="form-check-label" htmlFor={data.d}>{data.d}</label>
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
                            <div>
                                {this.tempatJawaban(data)}
                            </div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        );
    }
}

export default Soal;