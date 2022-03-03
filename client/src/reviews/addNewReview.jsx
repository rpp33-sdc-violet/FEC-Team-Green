import React from 'react';
import Modal from './Modal.jsx';
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
      body: null,
      characteristics: {},
      displayCharac: {Size: null, Width: null, Comfort: null, Quality: null, Length: null, Fit: null}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.recommendChange = this.recommendChange.bind(this);
    this.characChange = this.characChange.bind(this);
    this.generalChange = this.generalChange.bind(this);
  }

  showModal () {
    this.setState({show: true});
  }

  hideModal () {
    this.setState({show: false});
  }

  recommendChange (event) {
    let answer = event.target.value;
    let booleanValue = (answer === 'true');
    this.setState({recommend: booleanValue});
  }


  characChange (event) {
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
    inputCharac[name] = parseInt(event.target.value);
    let display = this.state.displayCharac;
    display[name] = info[name][event.target.value - 1];
    this.setState({characteristics: inputCharac, displayCharac: display});
  }

  generalChange(event) {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  render() {

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
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <form>
            <h1>Write Your Review </h1>
            <h3>About the {this.props.product_name}</h3>
            <div>
              <div>Rating*</div>
              {star1} {star2} {star3} {star4} {star5} {this.state.displayText}

              <div>Do you recommend this product? *</div>
              <input type = 'radio' id = 'yes' name = 'recommend' value={true} onClick = {this.recommendChange}></input>
              <label htmlFor = 'yes'> Yes </label>
              <input type = 'radio' id = 'no' name = 'recommend' value={false} onClick = {this.recommendChange}></input>
              <label htmlFor = 'no'> No </label>

              <div>Characteristics*</div>
              {characteristics.map((charac) => {
                return (
                  <div key = {JSON.stringify(charac.id)}>
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
                  </div>
                );
              })}

              <div>Review Summary</div>
              <textarea name = 'summary' maxLength='60' placeholder = {'Example: Best purchase ever!'} onChange={this.generalChange} />

              <div>Review Body</div>
              <textarea name = 'body' maxLength='1000' placeholder = {'Why did you like the product or not?'} onChange={this.generalChange}/>
              <small></small>
            </div>
          </form>

        </Modal>
        <Button>
          <AddReview onClick = {this.showModal}>ADD A REVIEW</AddReview >
        </Button>
      </div>
    );
  }
}

const Button = styled.div`
  display: grid;
  grid-template-columns: 250px 180px;
  margin-top: 10px;
`;

const AddReview = styled(Button)`
  margin-right: 20px;
  background: none;
  border: 1px solid black;
  font-weight: bold;
`;


export default AddNewReview;