urql
- declarative api: yes
- setup: plug and play
- debug: yes - devtools
- ssr: yes
- uploads: yes
- cache: yes
- store normalization: yes (very customizable)
- persisted queries: yes
- schema awareness: optional in runtime
- pagination: semi manual
- optimistic updates: simple (lacks per mutation customization)
- automatic ui updates: yes
- computed fields: yes
- react concurrent: concurrent safe but no suspense and transition support
- query batching: no
- testing: mediocre: requires mocking the whole client with jest which doesnt simulate real environment
- docs: exhaustive
- typescript: manual or graphql-codegen
- size??
- local state management: no
- extensible: very through extensions
- list updates: manual for all queries separately
- connections: no
- data masking: no

apollo:
- declarative api: yes
- setup: plug and play
- debug: yes - devtools
- ssr: yes
- uploads: yes
- cache: yes
- store normalization: yes
- persisted queries: partial (link exists but not maintained, no info)
- schema awareness: no
- pagination: semi manual
- optimistic updates: yes
- automatic ui updates: middle (multiple? no)
- computed fields: yes
- react concurrent: no
- query batching: partial
- testing: yes
- docs: ok
- typescript: manual or apollo codegen
- size??
- local state management: yes
- extensible: yes through links
- list updates: manual for all queries separately
- connections: partial (manual updates)
- data masking: no


to mention:
- relay eslint plugins
