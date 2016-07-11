<script>
$reply = "Whatever you want";
    $data = array(
        "response_type"=>"in_channel",
        "text"=>$repy,
        );
    header('Content-Type: application/json');
    echo json_encode($data);
</script>
