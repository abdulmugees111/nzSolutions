import {ArrowRight} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Link} from '@/i18n/navigation';
import type {Service} from '@/constants/services';

export function ServiceCard({service}: {service: Service}) {
  return (
    <Card className="group h-full transition hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <Badge>{service.category === 'digital' ? 'Digital Engineering' : 'Telecom Infrastructure'}</Badge>
        <CardTitle className="mt-4">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{service.shortDescription}</p>
        <Link href={`/services/${service.slug}`} className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
          Learn more <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
