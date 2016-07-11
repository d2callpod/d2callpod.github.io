function slackResponse () {
$reply = "Whatever you want";
    $data = array(
        "response_type"=>"in_channel",
        "text"=>$repy,
        );
    echo json_encode($data);
}
