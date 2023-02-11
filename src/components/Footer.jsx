import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="">
                            <p class="copyright-text">
                                Copyright &copy; 2023 All Rights Reserved by
                                <a href="rahanet.af">Rahanet ISP company</a>.
                            </p>
                        </div>

                        <div class="">
                            <ul class="social-icons">
                                <li>
                                    <a class="facebook" href="#!"><i class="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a class="twitter" href="#!"><i class="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a class="dribbble" href="#!"><i class="fa fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a class="linkedin" href="#!"><i class="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <small>author sayeed mahdi mousavi</small>
                    </div>
                </div>
            </footer>
        </Container>
    )
}

export default Footer