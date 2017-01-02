import React from 'react';
import { translate } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip }
  from 'recharts';

function PollGraph({ poll, t }) {
  if (!poll || !poll.answers) {
    return <div/>;
  }
  var data = Object.keys(poll.answers).map(function(answerId) {
    return {
      name: poll.answers[answerId].text,
      Votes: poll.answers[answerId].voteCount
    };
  });
  return (
    <div>
      {t('RESULTS')}
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey='name'/>
      <YAxis/>
      <CartesianGrid/>
      <Tooltip/>
      <Bar isAnimationActive={false} dataKey='Votes'/>
    </BarChart>
    </div>
  );
}

PollGraph.propTypes = {
  poll: React.PropTypes.object,
  t: React.PropTypes.func
};

export default translate()(PollGraph);
