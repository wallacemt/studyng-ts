type Resource = "user" | "post" | "comment";

type Endpoint = `/api${Resource}`;

type Version = `v${number}.${number}.${number}`;
