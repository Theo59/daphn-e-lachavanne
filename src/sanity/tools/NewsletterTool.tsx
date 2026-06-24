/**
 * Tool « Newsletter » du Studio (page dans le menu). Pour l'instant : un simple
 * raccourci vers le tableau de bord Brevo (gestion des abonnés + envois).
 * Plus tard : on pourra y brancher la liste des abonnés et un outil de validation de code.
 */
import { Box, Button, Card, Container, Flex, Heading, Stack, Text } from '@sanity/ui';
import { EnvelopeIcon, LaunchIcon } from '@sanity/icons';

const BREVO_URL = 'https://app.brevo.com';

export function NewsletterTool() {
  return (
    <Card height="fill" overflow="auto" padding={[4, 5, 6]} tone="default">
      <Container width={1}>
        <Stack space={5} paddingY={[4, 5, 6]}>
          <Flex align="center" gap={3}>
            <Text size={4}>
              <EnvelopeIcon />
            </Text>
            <Heading size={4}>Newsletter</Heading>
          </Flex>

          <Text muted size={2}>
            Les abonnés, la rédaction et l'envoi des campagnes se gèrent dans Brevo.
            Ce raccourci ouvre votre tableau de bord Brevo dans un nouvel onglet.
          </Text>

          <Box>
            <Button
              as="a"
              href={BREVO_URL}
              target="_blank"
              rel="noopener noreferrer"
              text="Ouvrir Brevo"
              icon={LaunchIcon}
              tone="primary"
              padding={4}
            />
          </Box>
        </Stack>
      </Container>
    </Card>
  );
}

export default NewsletterTool;
