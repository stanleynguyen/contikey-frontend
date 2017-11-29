import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

import StyledForm from './StyledForm';

const ArticleForm = props => (
  <StyledForm onSubmit={e => e.preventDefault()}>
    <label>Post to:&nbsp;</label>
    <select className="channels">
      <option value="1">Random 1</option>
      <option value="2">Random 2</option>
      <option value="3">Random 3</option>
    </select>
    <Input type="text" placeholder="Article URL" />
    <Input type="textarea" placeholder="Any thought?" rows={4} />
    <div className="buttons">
      <button className="btn-invi" type="button" onClick={props.toggle}>
        Cancel
      </button>
      <button className="btn-secondary" type="submit">
        Post
      </button>
    </div>
  </StyledForm>
);
ArticleForm.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default ArticleForm;
