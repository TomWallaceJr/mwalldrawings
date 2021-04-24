import React from 'react';
import self from '../../images/self.jpg';

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-center">Hi! I'm Melissa!</h1>
      <h4 className="text-center"> Wife | Mother | Artist</h4>
      <img
        src={self}
        alt="self portrait"
        className="w-100 h-75 mx-auto rounded-pill"
      />
      <p>
        Artist statement can go here and anything below this whatver Melissa
        wants to say about herself, what she does, who she is, etc
      </p>
      <h5 className="text-center">Subheading</h5>
      <p>
        More about melissa... maybe an image or two. whatver she wants to talk
        about this page is completely hers to mend. I'll adjust the padding,
        margins, text color, borders, or style it however she likes.
      </p>
      <h5 className="text-center">On Larger Screens</h5>
      <p>
        I have an idea wehere her selfportrait would be on left with her
        introduction on the right styled a cool way. See my portfolio for
        reference.
      </p>
    </div>
  );
}
