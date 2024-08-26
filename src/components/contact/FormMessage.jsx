import './contact.scss'

const FormMessage = ({onRef, onSubmit}) =>{
    return (
    <form ref={onRef} onSubmit={onSubmit}>
        <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input required type="text" name="name" placeholder="Your Name" />
        </div>
        <div className="formFlex">
            <div className="formGroup">
                <label htmlFor="mail">Mail</label>
                <input required type="email" name="email" placeholder="Your Email"  />
            </div>
            <div className="formGroup">
                <label htmlFor="telephone">Telephone</label>
                <input required type="text" name="telephone" placeholder="Your Telephone"/>
            </div>
        </div>
        <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea required name="message" placeholder="Your Message" id="" rows="5" resize="false"></textarea>
        </div>
        <button>Message Me</button>
    </form>
    )
}
export default FormMessage