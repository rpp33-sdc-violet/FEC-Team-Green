import React from 'react';
import Modal from '../utils/Modal.jsx';
import axios from 'axios';
import styled from 'styled-components';

class AddNewReview extends React.Component {
//will be called in reviewList (widget top level component)

  constructor (props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      show: false,
      hoverRating: [0, 0, 0, 0, 0],
      rating: 0,
      displayText: null,
      recommend: null,
      summary: null,
      body: '',
      name: null,
      email: null,
      characteristics: {},
      postCharac: {},
      photos: [],
      canUpload: true,
      displayCharac: {Size: null, Width: null, Comfort: null, Quality: null, Length: null, Fit: null}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.recommendChange = this.recommendChange.bind(this);
    this.characChange = this.characChange.bind(this);
    this.generalChange = this.generalChange.bind(this);
    this.textCounter = this.textCounter.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.photoUpload = this.photoUpload.bind(this);
  }

  componentDidMount() {
    if (this.state.photos.length > 5) {
      this.setState({canUpload: false});
    }
  }

  showModal () {
    this.setState({show: true});
  }

  hideModal () {
    this.setState({show: false});
  }

  recommendChange (event) {
    //event.preventDefault();
    event.stopPropagation();
    let answer = event.target.value;
    let booleanValue = (answer === 'true');
    this.setState({recommend: booleanValue});
  }


  characChange (event) {
    event.stopPropagation();
    let info = {
      Size: ['A size too small', '1/2 size too small', 'Perfect', '1/2 size too big', 'too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
      Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
    };
    let inputCharac = this.state.characteristics;
    let name = event.target.name;
    let id = event.target.id;
    console.log('id type', typeof id);
    inputCharac[name] = parseInt(event.target.value);
    let display = this.state.displayCharac;
    display[name] = info[name][event.target.value - 1];
    let forPost = this.state.postCharac;
    forPost[id] = parseInt(event.target.value);
    this.setState({characteristics: inputCharac, displayCharac: display, postCharac: forPost});
  }

  generalChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  textCounter() {
    let totalText = this.state.body;
    if (totalText.length >= 50) {
      return 'Minimum reached';
    } else {
      return `Minimum required characters left:"${(50 - totalText.length)}"`;
    }
  }

  photoUpload(event) {
    const file = event.target.files[0];
    let data = new FormData();
    data.append('photo', file);
    console.log('form data', data.get('photo'));

    axios.post('/photos', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then ((res) => {
        console.log(res.data);
        let photoURL = this.state.photos;
        photoURL.push(res.data);
        this.setState({photos: photoURL});
      })
      .catch((err) => {
        alert('Unable to upload photo');
      });
  }

  submitReview(event) {
    event.preventDefault();
    if (this.state.rating === 0 || this.state.recommend === null || this.state.body === ''
    || this.state.name === null || this.state.email === null || this.state.characteristics === {}) {
      alert('Please fill out the mandatory fields(*)');
    } else if (this.state.body.length < 50) {
      alert ('Review body must be over 50 characters long');
    } else if (!this.state.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      alert ('The email address provided is not in correct email format');
    } else if (this.state.photos.length > 5) {
      alert('can not upload more than five photos');
    } else {
      let reviewParam = {
        // eslint-disable-next-line camelcase
        product_id: parseInt(this.props.productId),
        rating: parseInt(this.state.rating),
        summary: this.state.summary,
        body: this.state.body,
        recommend: this.state.recommend,
        name: this.state.name,
        photos: this.state.photos,
        email: this.state.email,
        characteristics: this.state.postCharac
      };
      console.log('reviewParam', reviewParam);
      axios.post('/api/reviews', reviewParam)
        .then((res) => {
          alert('Successfully submitted your review');
          this.hideModal();
        })
        .catch((err) => {
          alert('Failed to post review');
        });


    }

  }

  render() {
    // *****TRIAL: DARK MODE*****
    let addReviewButton = null;
    if (this.props.theme === 'light-theme') {
      addReviewButton = <AddReview onClick = {this.showModal}>ADD A REVIEW+</AddReview >;
    }
    if (this.props.theme === 'dark-theme') {
      addReviewButton = <AddReviewDark onClick = {this.showModal}>ADD A REVIEW+</AddReviewDark >;
    }

    let starText = ['1 star - "Poor"', '2 stars - "Fair', ' 3 stars - "Average"', '4 stars - "Good"', '5 stars - "Great"'];

    let star1 =
    this.state.hoverRating[0] === 0 ?
      <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 0, 0, 0, 0], rating: 1, displayText: starText[0]}); }}/> :
      <span className="fa fa-star" aria-hidden="true"/>;

    let star2 =
    this.state.hoverRating[1] === 0 ?
      <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 0, 0, 0], rating: 2, displayText: starText[1]}); }}/> :
      <span className="fa fa-star" aria-hidden="true"/>;

    let star3 =
      this.state.hoverRating[2] === 0 ?
        <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 1, 0, 0], rating: 3, displayText: starText[2]}); }}/> :
        <span className="fa fa-star" aria-hidden="true"/>;

    let star4 =
      this.state.hoverRating[3] === 0 ?
        <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 1, 1, 0], rating: 4, displayText: starText[3]}); }}/> :
        <span className="fa fa-star" aria-hidden="true"/>;

    let star5 =
      this.state.hoverRating[4] === 0 ?
        <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 1, 1, 1], rating: 5, displayText: starText[4]}); }}/> :
        <span className="fa fa-star" aria-hidden="true"/>;

    let characteristics = [];
    for (let key in this.props.charac) {
      let breakdown = this.props.charac;
      characteristics.push({name: `${key}`, id: breakdown[key]['id'], value: breakdown[key]['value']});

    }

    let displayCharac = <div>
      {this.state.displayCharac}
    </div>;

    //console.log('review', this.state.body);


    return (
      <NewReviewWrapper>
        <Modal show={this.state.show} handleClose={this.hideModal} theme={this.props.theme}>
          <form>
            <h1>Write Your Review </h1>
            <h3>About the {this.props.product_name}</h3>
            <div>
              <Section>
                <div>Rating*</div>
                <SubSection>
                  {star1} {star2} {star3} {star4} {star5} {this.state.displayText}
                </SubSection>
              </Section>

              <Section>
                <div>Do you recommend this product? *</div>
                <SubSection>
                  <input type = 'radio' id = 'yes' name = 'recommend' value={true} onClick = {this.recommendChange}></input>
                  <label htmlFor = 'yes'> Yes </label>
                  <input type = 'radio' id = 'no' name = 'recommend' value={false} onClick = {this.recommendChange}></input>
                  <label htmlFor = 'no'> No </label>
                </SubSection>
              </Section>

              <Section>
                <div>Characteristics*</div>
                {characteristics.map((charac) => {
                  return (
                    <SubSection key = {JSON.stringify(charac.id)}>
                      <div>{charac.name}</div>
                      <input type = 'radio' id = {charac.id} name = {charac.name} value={1} onClick = {this.characChange}></input>
                      <label htmlFor = 'charac.id'> 1 </label>
                      <input type = 'radio' id = {charac.id} name = {charac.name} value={2} onClick = {this.characChange}></input>
                      <label htmlFor = 'charac.id'> 2 </label>
                      <input type = 'radio' id = {charac.id} name = {charac.name} value={3} onClick = {this.characChange}></input>
                      <label htmlFor = 'charac.id'> 3 </label>
                      <input type = 'radio' id = {charac.id} name = {charac.name} value={4} onClick = {this.characChange}></input>
                      <label htmlFor = 'charac.id'> 4 </label>
                      <input type = 'radio' id = {charac.id} name = {charac.name} value={5} onClick = {this.characChange}></input>
                      <label htmlFor = 'charac.id'> 5 </label>
                      <div>
                        {this.state.displayCharac[charac.name]}
                      </div>
                    </SubSection>
                  );
                })}
              </Section>
              <Section>
                <div>Review Summary</div>
                <Text name = 'summary' maxLength='60' placeholder = {'Example: Best purchase ever!'} onChange={this.generalChange}> </Text>
              </Section>

              <Section>
                <div>Review Body*</div>
                <Text name = 'body' maxLength='1000' placeholder = {'Why did you like the product or not?'} onChange={this.generalChange}> </Text>
                <br></br>
                <Info>{this.textCounter()}</Info>
              </Section>

              <Section>
                <div>Upload your photos</div>
                <br></br>
                <input type="file" id="img" name="img" accept="image/*" onChange={this.photoUpload} onClick={(e) => e.stopPropagation()} />
                <UploadPhoto>
                  {
                    this.state.photos.map(photo => (
                      <img src={photo} key={photo} className="add-answer-photo" />
                    ))
                  }
                </UploadPhoto>
              </Section>

              <Section>
                <div>What is your nickname*</div>
                <Input name = 'name' type='text' maxLength='60' placeholder='Example: jack11!'
                  onChange={this.generalChange}/>
                <br></br>
                <Info>For privacy reasons, do not use your full name or email address</Info>
              </Section>

              <Section>
                <div>Your email*</div>
                <Input name = 'email' type='text' maxLength='60' placeholder='jackson11@gmail.com'
                  onChange={this.generalChange} />
                <br></br>
                <Info>For authentication reasons, you will not be emailed</Info>
              </Section>

              <Section>
                <Button onClick = {this.submitReview}>Submit Review</Button>
              </Section>

            </div>
          </form>

        </Modal>

        {addReviewButton}

      </NewReviewWrapper>
    );
  }
}

const NewReviewWrapper = styled.div`
  z-index: 20;
  color: #404040;
  font-size: 16px;
  font-weight: normal;
`;

const Text = styled.textarea`
  width: 90%;
  height: 70px;
  padding: 6px 10px;
  margin: 8px 8px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  transition: 0.5s;
  outline: none;
  resize: none;
`;

const Input = styled.input`
  width: 90%;
  padding: 6px 10px;
  margin: 8px 8px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  transition: 0.5s;
  outline: none;
`;


const Section = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 8px;
  font-size: 16px;
  color: black;
`;
const SubSection = styled.div`
  padding: 5px;
`;

const Info = styled.div`
  font-size: 14px;
  font-style: italic;
  font-weight: 100;
`;

const UploadPhoto = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const AddReview = styled.button`
  background: none;
  border: 1px solid #404040;
  font-weight: bold;
  margin-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px
`;

const AddReviewDark = styled.button`
  background: #121212;
  border: 1px solid #eee;
  font-weight: bold;
  margin-right: 20px;
  color: #eee;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px
`; 


export default AddNewReview;