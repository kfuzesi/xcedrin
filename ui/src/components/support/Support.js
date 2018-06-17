import React, { Component } from 'react';
import './Support.css';

export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div className="support">
        <div className="support-section">
          <div className="support-section-title">Contact</div>
          <div className="support-item">
            <div className="support-item-title">For any inquiries not answered by the FAQs below, please contact us at</div>
            <div className="support-item-desc">xcedrin.support@ibm.com</div>
          </div>
        </div>
        <div className="support-section">
          <div className="support-section-title">FAQ</div>
          <div className="support-item">
            <div className="support-item-title">Is there a limit on how much demand I can submit?</div>
            <div className="support-item-desc">No, you may submit as much demand as necessary. However, please submit appropriate demand based on budget and management feedback.</div>
          </div>
          <div className="support-item">
            <div className="support-item-title">How will I know if management has been notified of my demand submission?</div>
            <div className="support-item-desc">An email alert will be automatically sent out to your Hiring Manager, VP, and other stakeholders when demand has been submitted.</div>
          </div>
        </div>
      </div>
    );
  }
}

