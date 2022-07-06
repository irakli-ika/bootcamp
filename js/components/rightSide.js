const rightSideContent = () => {
   return `<aside class="right_side container">
                <div class="header">
                    <h4>Start creating your account</h4>
                </div>
                <div class="main_content">
                    <div class="steps_progress">
                        <div class="first_step">
                            <span class="number">1</span>
                            <span class="text">Personal information</span>
                        </div>
                        <div class="sec_step">
                            <span class="number">2</span>
                            <span class="text">Chess experience</span>
                        </div>
                    </div>
                    
                        <div class="form_block">
                            <form id="register_form">
                                <div id="personal_info" class="steps">
                                    <div class="header">
                                        <h2>Personal information</h2>
                                        <h4>This is basic information fields</h4>
                                    </div>
                                    <div class="inputs_group">
                                        <div class="field_group">
                                            <input type="text" class="inputValue personal_field" name="name" id="name">
                                            <label for="name" class="field_label" data-placeholder="Name" data-icon="*"></label>
                                        </div>
                                        <div class="field_group">
                                            <input type="text" class="inputValue personal_field" name="email" id="email">
                                            <label for="email" class="field_label" data-placeholder="Email address" data-icon="*"></label>
                                        </div>
                                        <div class="field_group">
                                            <input type="text" class="inputValue personal_field" name="phone" id="phone">
                                            <label for="phone" class="field_label" data-placeholder="Phone number" data-icon="*"></label>
                                        </div>
                                        <div class="field_group">
                                            <input type="date" class="inputValue personal_field" name="date" id="date">
                                            <label for="date" class="field_label" data-placeholder="Date of birt" data-icon="*"></label>
                                        </div>
                                    </div><!-- end inputs_group -->
                                </div><!-- end personal_info -->
                                <div id="chess_experience" class="steps">
                                    <div class="header">
                                        <h2>Chess experience</h2>
                                        <h4>This is basic information fields</h4>
                                    </div>
                                    <div>
                                        <select>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <select>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div><!-- end select blocks -->
                                </div><!-- end chess_experience -->
                                <div class="radio_section">
                                    <h2>Have you participated in the Redberry Championship? *</h2>
                                    <input type="radio" name="participated"> yes
                                    <input type="radio" name="participated"> no
                                </div><!-- end radio_section -->
                            </form>
                        </div>
                    
                    
                    <div class="button">
                        <a href="index.html">Back</a>
                        <a href="" data-step="">next
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12.5C1.5 15.2848 2.60625 17.9555 4.57538 19.9246C6.54451 21.8938 9.21523 23 12 23C14.7848 23 17.4555 21.8938 19.4246 19.9246C21.3938 17.9555 22.5 15.2848 22.5 12.5C22.5 9.71523 21.3938 7.04451 19.4246 5.07538C17.4555 3.10625 14.7848 2 12 2C9.21523 2 6.54451 3.10625 4.57538 5.07538C2.60625 7.04451 1.5 9.71523 1.5 12.5ZM24 12.5C24 15.6826 22.7357 18.7348 20.4853 20.9853C18.2348 23.2357 15.1826 24.5 12 24.5C8.8174 24.5 5.76516 23.2357 3.51472 20.9853C1.26428 18.7348 0 15.6826 0 12.5C0 9.3174 1.26428 6.26516 3.51472 4.01472C5.76516 1.76428 8.8174 0.5 12 0.5C15.1826 0.5 18.2348 1.76428 20.4853 4.01472C22.7357 6.26516 24 9.3174 24 12.5ZM6.75 11.75C6.55109 11.75 6.36032 11.829 6.21967 11.9697C6.07902 12.1103 6 12.3011 6 12.5C6 12.6989 6.07902 12.8897 6.21967 13.0303C6.36032 13.171 6.55109 13.25 6.75 13.25H15.4395L12.219 16.469C12.1493 16.5387 12.094 16.6215 12.0562 16.7126C12.0185 16.8037 11.9991 16.9014 11.9991 17C11.9991 17.0986 12.0185 17.1963 12.0562 17.2874C12.094 17.3785 12.1493 17.4613 12.219 17.531C12.2887 17.6007 12.3715 17.656 12.4626 17.6938C12.5537 17.7315 12.6514 17.7509 12.75 17.7509C12.8486 17.7509 12.9463 17.7315 13.0374 17.6938C13.1285 17.656 13.2113 17.6007 13.281 17.531L17.781 13.031C17.8508 12.9613 17.9063 12.8786 17.9441 12.7874C17.9819 12.6963 18.0013 12.5987 18.0013 12.5C18.0013 12.4013 17.9819 12.3037 17.9441 12.2125C17.9063 12.1214 17.8508 12.0387 17.781 11.969L13.281 7.469C13.2113 7.39927 13.1285 7.34395 13.0374 7.30621C12.9463 7.26848 12.8486 7.24905 12.75 7.24905C12.6514 7.24905 12.5537 7.26848 12.4626 7.30621C12.3715 7.34395 12.2887 7.39927 12.219 7.469C12.1493 7.53873 12.094 7.62152 12.0562 7.71262C12.0185 7.80373 11.9991 7.90138 11.9991 8C11.9991 8.09862 12.0185 8.19627 12.0562 8.28738C12.094 8.37848 12.1493 8.46127 12.219 8.531L15.4395 11.75H6.75Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </aside>`
}

export default rightSideContent