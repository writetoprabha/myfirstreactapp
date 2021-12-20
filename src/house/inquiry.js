import { useState } from "react";

const Inquiry = (house) => {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        remarks: ""
    });

    const onChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.id]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
    };

    return ( 
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={contactInfo.name}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={contactInfo.email}
                    onChange={onChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input
                    type="text"
                    id="remarks"
                    className="form-control"
                    placeholder="Remarks"
                    value={contactInfo.remarks}
                    onChange={onChange}
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                disabled={!contactInfo.name || !contactInfo.email}
                onChange={onSubmit}
            >Submit</button>
        </form>
    );
}
 
export default Inquiry;