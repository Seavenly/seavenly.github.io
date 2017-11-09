import React from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

import SVG from '../partials/SVG';

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClear(e) {
    e.preventDefault();
    this.setState(() => ({
      name: '',
      email: '',
      message: '',
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state['bot-field'] && !this.state.formResult) {
      this.setState(() => ({
        showFormResult: true,
        formResult: <SVG icon="loading" />,
      }));
      axios({
        method: 'post',
        url: '/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: encode({
          'form-name': 'contact',
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        }),
      })
        .then(() => {
          this.setState(() => ({
            formResult: "Thanks for contacting me. I'll get back to you shortly.",
            name: '',
            email: '',
            message: '',
          }));
        })
        .catch(() => {
          this.setState(() => ({
            formResult: 'Woops. Looks like there was an error. Please try again.',
          }));
          setTimeout(
            () =>
              this.setState(() => ({
                showFormResult: false,
              })),
            4000,
          );
          setTimeout(
            () =>
              this.setState(() => ({
                formResult: '',
              })),
            4500,
          );
        });
    }
  }

  render() {
    return (
      <Wrapper>
        <form
          name="contact"
          className="form"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input
            name="bot-field"
            value={this.state['bot-field']}
            onChange={this.handleInputChange}
            style={{ display: 'none' }}
          />
          <FormField>
            <label htmlFor="name">
              <LabelText>Name</LabelText>
              <FormControl
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name here"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <SvgWrapper>
                <SVG icon="user" />
              </SvgWrapper>
            </label>
          </FormField>
          <FormField>
            <label htmlFor="email">
              <LabelText>Email</LabelText>
              <FormControl
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email here"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <SvgWrapper>
                <SVG icon="email" />
              </SvgWrapper>
            </label>
          </FormField>
          <FormField>
            <label htmlFor="message">
              <LabelText>Message</LabelText>
              <FormControlTextarea
                id="message"
                type="textarea"
                name="message"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleInputChange}
              />
            </label>
          </FormField>
          <Buttons>
            <Button type="reset" onClick={this.handleClear}>
              Clear
            </Button>
            <Button type="submit">Submit</Button>
          </Buttons>
        </form>
        <Result isOpen={this.state.showFormResult}>{this.state.formResult}</Result>
      </Wrapper>
    );
  }
}

export default Contact;

const Wrapper = styled.div`
  max-width: 32rem;
  padding: 1rem;
  margin: 1rem auto 0;
  background: #f5f5f5;
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 37.5rem) {
    width: 50%;
  }
`;
const rotate360 = keyframes`
  from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
const Result = styled.div.attrs({
  style: ({ isOpen }) =>
    isOpen
      ? {
          transform: 'translateY(0)',
        }
      : null,
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0.5rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-align: center;
  border-radius: 0.2rem;
  transform: translateY(4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.2rem;
  transition: transform 0.5s;
  svg {
    fill: white;
    animation: ${rotate360} 2s linear infinite;
  }
`;
const SvgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: #aaa;
    transition: fill 0.3s;
    stroke: white;
  }
`;
const FormControl = styled.input`
  border-radius: 0.2rem;
  padding: 0.5rem;
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  transition: outline 0.3s;
  outline: 1px solid transparent;
  outline-offset: -1px;
  &:focus {
    outline-color: ${({ theme }) => theme.colors.secondary};
    & ~ ${SvgWrapper} svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
  &[type='text'],
  &[type='email'] {
    padding-left: 2rem;
  }
  &[type='textarea'] {
    height: 6rem;
  }
`;
const FormControlTextarea = FormControl.withComponent('textarea');
const FormField = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;
const LabelText = styled.span`
  position: absolute;
  z-index: -10;
  left: -9999px;
`;
const Buttons = styled.div`
  text-align: right;
`;
const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-transform: lowercase;
  font-size: 0.9rem;
  font-weight: 400;
  display: inline-block;
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background: #777;
    border-color: #777;
  }
  &[type='reset'] {
    color: ${({ theme }) => theme.colors.primary};
    background: white;
    &:hover {
      background: white;
      color: #999;
      border-color: #999;
    }
  }
`;
