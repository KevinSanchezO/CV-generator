function SelfSummaryInfoView (props) {
    const {data} = props;

    return (
      <>
        <h2>About me</h2>

        <p className='self-summary'>
          {data.selfSummary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tristique lorem, eu sagittis lectus. Duis ultrices vulputate orci eu imperdiet. Mauris ac ipsum odio.'}
        </p>
      </>
    )
}

export default SelfSummaryInfoView;