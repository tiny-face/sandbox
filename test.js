Today I had an idea for an alternative approach to send session duration information. Below I will describe two approaches. The first one is already implemeted, the second one is my alternative approach.

First approach: the frontend sends a separate metric, which will be called “session” and will have a start time and duration. And you can use it as is.  

The second approach is a bit more complex, but as I think more flexible, because it will not only get the duration of sessions, but also know what metrics were during the session.
The second approach:
We need to add “session_id” to MetricsUploadParameters and the frontend will fill this field.
To get the session duration you will need to do the following:
1. Group the metrics for the time period by “session_id”;
2. Calculate the duration for each of the sessions. (duration = last_metric_in_session.startTimestamp - first_metric_in_session.startTimestamp);

I'd like to know your opinion, and what approach would be convenient for you.